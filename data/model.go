package data

// FundData 基金数据
type FundData struct {
	Code     string          `json:"code"`         // 基金代码
	Name     string          `json:"name"`         // 基金名称
	Estimate string          `json:"expectGrowth"` // 当前基金单位净值估算日涨幅，单位为百分比
	Price    float64         `json:"expectWorth"`  // 当前基金单位净值估算
	Data     []NetWorthTrend `json:"netWorthData"` // 历史净值信息，依次表示：日期、单位净值、净值涨幅、每份分红
}

// NetWorthTrend 净值走势
type NetWorthTrend struct {
	X            int64   `json:"x"`            // 日期
	Y            float64 `json:"y"`            // 单位净值
	EquityReturn float64 `json:"equityReturn"` // 净值涨幅
	UnitMoney    string  `json:"unitMoney"`    // 每份分红
}
