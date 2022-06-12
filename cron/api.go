package cron

import (
	"FundAlert/alert"
	"FundAlert/config"
	"FundAlert/data"
	"fmt"
	"github.com/robfig/cron/v3"
	"log"
	"strconv"
	"strings"
	"sync"
	"time"
)

var c *cron.Cron
var once sync.Once

// Start 开始服务
func Start() bool {
	result := true
	once.Do(func() {
		c = cron.New(cron.WithSeconds())
		_, err := c.AddFunc(`0 30 14 * * *`, Analysis)
		if err != nil {
			log.Printf(`任务添加失败，err：%v`, err)
			result = false
			return
		}
		// 输出分析的基金
		log.Printf(`分析基金列表：`)
		for _, v := range config.GetStringList(`fund_code`) {
			// 获取数据
			d, ok := data.GetData(v)
			if !ok {
				log.Printf(`%v基金数据获取失败`, v)
				continue
			}
			log.Printf(`%v(%v)`, d.Name, d.Code)
		}
	})
	c.Start()
	return result
}

// Stop 停止服务
func Stop() {
	c.Stop()
}

// Analysis 分析基金状态
func Analysis() {
	// 周末不分析
	now := time.Now()
	if now.Weekday() == time.Saturday || now.Weekday() == time.Sunday {
		return
	}
	// 当日涨跌预警
	estimate := make([]string, 0)
	// 周期价格预警
	price := make([]string, 0)
	// 分析数据
	for _, v := range config.GetStringList(`fund_code`) {
		// 获取数据
		d, ok := data.GetData(v)
		if !ok {
			log.Printf(`%v基金数据获取失败`, v)
			continue
		}
		// 当日涨跌预警
		floatEstimate, err := strconv.ParseFloat(d.Estimate, 10)
		if err != nil {
			log.Printf(`当日涨跌预测数据错误，err：%v`, err)
		}
		if floatEstimate >= 2.5 || floatEstimate <= -2.5 {
			estimate = append(estimate, fmt.Sprintf(`%v(%v)当前涨跌%.1v！`, d.Name, d.Code, floatEstimate))
		}
		// 周期价格预警
		lenData := len(d.Data)
		// 七日预警
		max7 := d.Price
		min7 := d.Price
		for i := lenData - 1; lenData-i <= 7 && i >= 0; i-- {
			temp, err := strconv.ParseFloat(d.Data[i][1], 10)
			if err != nil {
				log.Printf(`历史单位净值数据错误，err：%v`, err)
				continue
			}
			if max7 == 0 || min7 == 0 {
				max7 = temp
				min7 = temp
				continue
			}
			if temp > max7 {
				max7 = temp
			}
			if temp < min7 {
				min7 = temp
			}
		}
		// 十五日预警
		max15 := d.Price
		min15 := d.Price
		for i := lenData - 1; lenData-i <= 15 && i >= 0; i-- {
			temp, err := strconv.ParseFloat(d.Data[i][1], 10)
			if err != nil {
				log.Printf(`历史单位净值数据错误，err：%v`, err)
				continue
			}
			if max15 == 0 || min15 == 0 {
				max15 = temp
				min15 = temp
				continue
			}
			if temp > max15 {
				max15 = temp
			}
			if temp < min15 {
				min15 = temp
			}
		}
		// 三十日预警
		max30 := d.Price
		min30 := d.Price
		for i := lenData - 1; lenData-i <= 30 && i >= 0; i-- {
			temp, err := strconv.ParseFloat(d.Data[i][1], 10)
			if err != nil {
				log.Printf(`历史单位净值数据错误，err：%v`, err)
				continue
			}
			if max30 == 0 || min30 == 0 {
				max30 = temp
				min30 = temp
				continue
			}
			if temp > max30 {
				max30 = temp
			}
			if temp < min30 {
				min30 = temp
			}
		}
		// 整合
		priceRow := fmt.Sprintf(`%v(%v)`, d.Name, d.Code)
		if min7 == d.Price {
			priceRow += "   7日最低"
		}
		if max7 == d.Price {
			priceRow += "   7日最高"
		}
		if min15 == d.Price {
			priceRow += "   15日最低"
		}
		if max15 == d.Price {
			priceRow += "   15日最高"
		}
		if min30 == d.Price {
			priceRow += "   30日最低"
		}
		if max30 == d.Price {
			priceRow += "   30日最高"
		}
		if strings.HasSuffix(priceRow, `)`) {
			// 没有周期价格预警，跳过
			continue
		}
		price = append(price, priceRow)
	}
	// 发送告警邮件
	msg := ``
	if len(estimate) != 0 {
		msg += fmt.Sprintf("=====当日涨跌预警=====\n%v", strings.Join(estimate, "\n"))
	}
	if len(price) != 0 {
		msg += fmt.Sprintf("=====周期价格预警=====\n%v", strings.Join(price, "\n"))
	}
	if msg == `` {
		msg = `今日无告警！`
	}
	alert.SendEmail(msg)
}
