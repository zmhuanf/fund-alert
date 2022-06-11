package data

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

const api = `https://api.doctorxiong.club/v1/fund/detail/list`

// GetOriginalData 获取原始数据
func GetOriginalData(code string) ([]byte, bool) {
	url := fmt.Sprintf(`%v?code=%v`, api, code)
	resp, err := http.Get(url)
	if err != nil {
		log.Printf(`http请求失败，err：%v，url：%v`, err, url)
		return nil, false
	}
	defer resp.Body.Close()
	data, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Printf(`流读取失败，err：%v`, err)
		return nil, false
	}
	return data, true
}

// GetData 获取解析后的数据
func GetData(code string) (*FundData, bool) {
	data, ok := GetOriginalData(code)
	if !ok {
		log.Printf(`获取数据失败`)
		return nil, false
	}
	httpResponse := &HTTPResponse{}
	err := json.Unmarshal(data, httpResponse)
	if err != nil {
		log.Printf(`数据解析失败，err：%v，data：%v`, err, string(data))
		return nil, false
	}
	if httpResponse.Code != 200 {
		log.Printf(`响应错误，code：%v，message：%v`, httpResponse.Code, httpResponse.Message)
		return nil, false
	}
	if len(httpResponse.Data) == 0 {
		log.Printf(`为获取到有效数据`)
		return nil, false
	}
	return httpResponse.Data[0], true
}
