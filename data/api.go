package data

import (
	"crypto/tls"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
)

const api = `https://api.doctorxiong.club/v1/fund/detail/list`

// GetOriginalData 获取原始数据
func GetOriginalData(code string) ([]byte, bool) {
	// TODO 2024年临时补丁，用于解决数据来源网站证书过期问题
	// 创建一个自定义的http.Transport，忽略TLS证书验证
	transport := &http.Transport{
		TLSClientConfig: &tls.Config{
			InsecureSkipVerify: true,
		},
	}
	// 创建一个使用自定义Transport的http.Client
	client := &http.Client{
		Transport: transport,
	}
	url := fmt.Sprintf(`%v?code=%v`, api, code)
	resp, err := client.Get(url)
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

	// TODO 补丁前代码
	//url := fmt.Sprintf(`%v?code=%v`, api, code)
	//resp, err := http.Get(url)
	//if err != nil {
	//	log.Printf(`http请求失败，err：%v，url：%v`, err, url)
	//	return nil, false
	//}
	//defer resp.Body.Close()
	//data, err := io.ReadAll(resp.Body)
	//if err != nil {
	//	log.Printf(`流读取失败，err：%v`, err)
	//	return nil, false
	//}
	//return data, true
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
