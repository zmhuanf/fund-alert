package main

import (
	"FundAlert/config"
	"FundAlert/cron"
	"log"
)

// 初始化
func init() {
	// 初始化日志
	log.SetFlags(log.LstdFlags | log.Llongfile)
}

func main() {
	// 初始化配置文件
	ok := config.Initialize()
	if !ok {
		log.Printf(`配置文件初始化失败`)
		return
	}
	// 启动服务
	ok = cron.Start()
	if !ok {
		log.Printf(`服务启动失败`)
		return
	}
	defer cron.Stop()
	// 阻塞
	select {}
}
