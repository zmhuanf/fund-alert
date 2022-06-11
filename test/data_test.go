package test

import (
	"FundAlert/data"
	"log"
	"testing"
)

func TestGetData(t *testing.T) {
	d, ok := data.GetData(`161725`)
	if !ok {
		return
	}
	log.Printf(`%+v`, d)
}
