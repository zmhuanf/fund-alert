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
