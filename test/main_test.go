package test

import (
	"log"
	"testing"
)

func Test1(t *testing.T) {
	x := 1.1
	log.Printf(`%.2v`, x)
}
