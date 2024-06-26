package cron

import (
	"FundAlert/data"
	"fmt"
)

// 获取今天的价格是day天内最高最低标签
func getTag(day int, data *data.FundData) string {
	lenData := len(data.Data)
	price := data.Price
	max := price
	min := price
	for i := lenData - 1; lenData-i <= day && i >= 0; i-- {
		temp := data.Data[i].Y
		// 某些基金不会有今日的预测涨跌，那就取昨天的数据
		if max == 0 || min == 0 {
			max = temp
			min = temp
			price = temp
			continue
		}
		if temp > max {
			max = temp
		}
		if temp < min {
			min = temp
		}
	}
	result := ``
	if min == price {
		result += fmt.Sprintf("   %v日最低", day)
	}
	if max == price {
		result += fmt.Sprintf("   %v日最高", day)
	}
	return result
}
