package alert

import (
	"FundAlert/config"
	"fmt"
	"gopkg.in/gomail.v2"
	"log"
	"net/http"
	"net/url"
	"strings"
)

// SendEmail 发送邮件
func SendEmail(msg string) bool {
	m := gomail.NewMessage()
	m.SetHeader(`From`, config.GetString(`email_user`))
	m.SetHeader(`To`, config.GetStringList(`email_to`)...)
	m.SetHeader(`Subject`, `基金预警`)
	m.SetBody(`text/plain`, msg)
	d := gomail.NewDialer(`smtp.163.com`, 25, config.GetString(`email_user`), config.GetString(`email_password`))
	err := d.DialAndSend(m)
	if err != nil {
		log.Printf(`邮件发送失败，err：%v`, err)
		return false
	}
	return true
}

// SendWxMessage 发送微信消息
func SendWxMessage(msg string) {
	keys := config.GetStringList(`key`)
	urls := make([]string, len(keys))
	msg = strings.ReplaceAll(msg, "\n", "\n\n")
	msg = url.QueryEscape(msg)
	for i, v := range keys {
		urls[i] = fmt.Sprintf(`https://sctapi.ftqq.com/%v.send?title=基金预警&desp=%v`, v, msg)
	}
	for _, row := range urls {
		_, err := http.Get(row)
		if err != nil {
			log.Printf(`微信推送请求失败，err：%v`, err)
			continue
		}
	}
}
