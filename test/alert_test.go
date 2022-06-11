package test

import (
	"FundAlert/alert"
	"FundAlert/config"
	"testing"
)

func TestSendEmail(t *testing.T) {
	ok := config.InitializeByPath(`../config.json`)
	if !ok {
		return
	}
	alert.SendEmail(`测试消息！`)
}
