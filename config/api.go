package config

import (
	"encoding/json"
	"log"
	"os"
)

// 配置数据
var data map[string]interface{}

// 是否有错误
var hasError bool

// Initialize 初始化
func Initialize() bool {
	data = make(map[string]interface{})
	file, err := os.ReadFile(`config.json`)
	if err != nil {
		log.Printf(`配置文件读取错误，err：%v`, err)
		return false
	}
	err = json.Unmarshal(file, &data)
	if err != nil {
		log.Printf(`配置文件解析错误，err：%v，data：%v`, err, string(file))
		return false
	}
	return true
}

// InitializeByPath 带路径的初始化
func InitializeByPath(path string) bool {
	data = make(map[string]interface{})
	file, err := os.ReadFile(path)
	if err != nil {
		log.Printf(`配置文件读取错误，err：%v`, err)
		return false
	}
	err = json.Unmarshal(file, &data)
	if err != nil {
		log.Printf(`配置文件解析错误，err：%v，data：%v`, err, string(file))
		return false
	}
	return true
}

// HasError 是否有错误
func HasError() bool {
	temp := hasError
	hasError = false
	return temp
}

// GetString 读取字符串配置
func GetString(key string) string {
	defer func() {
		err := recover()
		if err != nil {
			log.Printf(`配置读取失败：%v`, err)
			hasError = true
		}
	}()
	return data[key].(string)
}

// GetStringList 读取字符串数组配置
func GetStringList(key string) []string {
	defer func() {
		err := recover()
		if err != nil {
			log.Printf(`配置读取失败：%v`, err)
			hasError = true
		}
	}()
	value := data[key].([]interface{})
	result := make([]string, len(value))
	for i, v := range value {
		result[i] = v.(string)
	}
	return result
}

// GetFloat64 读取小数配置
func GetFloat64(key string) float64 {
	defer func() {
		err := recover()
		if err != nil {
			log.Printf(`配置读取失败：%v`, err)
			hasError = true
		}
	}()
	return data[key].(float64)
}
