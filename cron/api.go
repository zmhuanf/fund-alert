package cron

import (
	"FundAlert/alert"
	"FundAlert/config"
	"FundAlert/data"
	"fmt"
	"github.com/robfig/cron/v3"
	"log"
	"math"
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
		if d.Estimate != `` {
			floatEstimate, err := strconv.ParseFloat(strings.ReplaceAll(d.Estimate, `%`, ``), 64)
			if err != nil {
				log.Printf(`当日涨跌预测数据错误，err：%v`, err)
			}
			if math.Abs(floatEstimate) > config.GetFloat64(`threshold`) {
				estimate = append(estimate, fmt.Sprintf(`%v(%v)   %.2v%%`, d.Name, d.Code, floatEstimate))
			}
		}
		// 周期价格预警
		priceRow := fmt.Sprintf(`%v(%v)`, d.Name, d.Code)
		priceRow += getTag(7, d)
		priceRow += getTag(15, d)
		priceRow += getTag(30, d)
		priceRow += getTag(60, d)
		priceRow += getTag(120, d)
		priceRow += getTag(240, d)
		priceRow += getTag(360, d)
		if strings.HasSuffix(priceRow, `)`) {
			// 没有周期价格预警，跳过
			continue
		}
		price = append(price, priceRow)
	}
	// 发送告警邮件
	msg := ``
	if len(estimate) != 0 {
		msg += fmt.Sprintf("===== 当日涨跌预警 =====\n%v", strings.Join(estimate, "\n"))
		msg += "\n\n"
	}
	if len(price) != 0 {
		msg += fmt.Sprintf("===== 周期价格预警 =====\n%v", strings.Join(price, "\n"))
	}
	if msg == `` {
		msg = `今日无告警！`
	}
	alert.SendEmail(msg)
	alert.SendWxMessage(msg)
}
