package test

import (
	"FundAlert/config"
	"FundAlert/cron"
	"log"
	"testing"
)

func TestAnalysis(t *testing.T) {
	log.SetFlags(log.LstdFlags | log.Llongfile)
	ok := config.InitializeByPath(`C:\Users\Root\Desktop\server\FundAlert\config.json`)
	if !ok {
		return
	}
	cron.Analysis()
}

func TestStart(t *testing.T) {
	ok := config.InitializeByPath(`../config.json`)
	if !ok {
		return
	}
	cron.Start()
}
