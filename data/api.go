package data

import (
	"encoding/json"
	"fmt"
	"github.com/dop251/goja"
	"io"
	"log"
	"net/http"
	"strconv"
	"strings"
)

const api = `https://fund.eastmoney.com/pingzhongdata`
const estimatedApi = `https://www.dayfund.cn/ajs/ajaxdata.shtml`

// GetOriginalData 获取原始数据
func GetOriginalData(code string) ([]byte, bool) {
	url := fmt.Sprintf(`%v/%v.js`, api, code)
	resp, err := http.Get(url)
	if err != nil {
		log.Printf(`http请求失败，err：%v，url：%v`, err, url)
		return nil, false
	}
	defer resp.Body.Close()
	data, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Printf(`流读取失败，err：%v`, err)
		return nil, false
	}
	return data, true
}

// GetEstimatedOriginalData 获取估算的今日原始数据
func GetEstimatedOriginalData(code string) ([]byte, bool) {
	url := fmt.Sprintf(`%v?showtype=getfundvalue&fundcode=%v`, estimatedApi, code)
	resp, err := http.Get(url)
	if err != nil {
		log.Printf(`http请求失败，err：%v，url：%v`, err, url)
		return nil, false
	}
	defer resp.Body.Close()
	data, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Printf(`流读取失败，err：%v`, err)
		return nil, false
	}
	return data, true
}

// GetData 获取解析后的数据
func GetData(code string) (*FundData, bool) {
	result := &FundData{}
	// 获取原始数据
	data, ok := GetOriginalData(code)
	if !ok {
		log.Printf(`获取数据失败`)
		return nil, false
	}
	// 解析变量
	vm := goja.New()
	_, err := vm.RunString(string(data))
	if err != nil {
		log.Printf(`js数据解析失败`)
		return nil, false
	}
	result.Name = vm.Get("fS_name").String()
	result.Code = vm.Get("fS_code").String()
	// 解析历史数据
	dataNetWorthTrend := vm.Get("Data_netWorthTrend").Export()
	jsonData, err := json.Marshal(dataNetWorthTrend)
	if err != nil {
		log.Printf(`Data_netWorthTrend数据获取失败`)
		return nil, false
	}
	var trends []NetWorthTrend
	err = json.Unmarshal(jsonData, &trends)
	if err != nil {
		log.Printf(`Data_netWorthTrend数据json解析失败`)
		return nil, false
	}
	result.Data = trends
	// 获取今日估算数据
	dataEstimated, ok := GetEstimatedOriginalData(code)
	if !ok {
		log.Printf(`获取今日估算数据失败`)
		return nil, false
	}
	parts := strings.Split(string(dataEstimated), `|`)
	if len(parts) < 8 {
		log.Printf(`今日估算数据分割失败`)
		return nil, false
	}
	price, err := strconv.ParseFloat(parts[7], 64)
	if err != nil {
		log.Printf(`今日估算数据类型转换失败`)
		return nil, false
	}
	result.Price = price
	result.Estimate = parts[5]

	return result, true
}
