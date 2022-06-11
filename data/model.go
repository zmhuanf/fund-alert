package data

// HTTPResponse http响应
type HTTPResponse struct {
	Code    int         `json:"code"`
	Message string      `json:"message"`
	Data    []*FundData `json:"data"`
}

// FundData 基金数据
type FundData struct {
	Code     string     `json:"code"`         // 基金代码
	Name     string     `json:"name"`         // 基金名称
	Estimate string     `json:"expectGrowth"` // 当前基金单位净值估算日涨幅，单位为百分比
	Price    float64    `json:"expectWorth"`  // 当前基金单位净值估算
	Data     [][]string `json:"netWorthData"` // 历史净值信息，依次表示：日期、单位净值、净值涨幅、每份分红
}
