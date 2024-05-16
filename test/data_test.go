package test

import (
	"FundAlert/data"
	"encoding/json"
	"log"
	"testing"
)

func TestGetData(t *testing.T) {
	d, ok := data.GetData(`005216`)
	if !ok {
		return
	}
	sd, _ := json.Marshal(d)
	log.Printf(`%+v`, string(sd))
}

func Test2(t *testing.T) {
	data, ok := data.GetEstimatedOriginalData(`005216`)
	if !ok {
		t.Error("GetOriginalData error")
	}
	println(string(data))
}
