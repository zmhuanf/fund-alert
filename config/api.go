package config

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"sync"
)

// 配置数据
var data map[string]interface{}

// 读写锁
var mutex sync.Mutex

// Initialize 初始化
func Initialize() bool {
	data = make(map[string]interface{})
	file, err := ioutil.ReadFile(`config.json`)
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
	file, err := ioutil.ReadFile(path)
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

// GetString 读取字符串配置
func GetString(key string) string {
	defer func() {
		err := recover()
		if err != nil {
			log.Printf(`配置读取失败：%v`, err)
		}
	}()
	mutex.Lock()
	defer mutex.Unlock()
	return data[key].(string)
}

// GetStringList 读取字符串数组配置
func GetStringList(key string) []string {
	defer func() {
		err := recover()
		if err != nil {
			log.Printf(`配置读取失败：%v`, err)
		}
	}()
	mutex.Lock()
	defer mutex.Unlock()
	value := data[key].([]interface{})
	result := make([]string, len(value))
	for i, v := range value {
		result[i] = v.(string)
	}
	return result
}
