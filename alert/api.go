package alert

import (
	"FundAlert/config"
	"gopkg.in/gomail.v2"
	"log"
)

// SendEmail 发送邮件
func SendEmail(msg string) bool {
	m := gomail.NewMessage()
	m.SetHeader(`From`, config.GetString(`email_user`))
	m.SetHeader(`To`, config.GetStringList(`email_to`)...)
	m.SetHeader(`Subject`, `基金告警`)
	m.SetBody(`text/plain`, msg)
	d := gomail.NewDialer(`smtp.163.com`, 25, config.GetString(`email_user`), config.GetString(`email_password`))
	err := d.DialAndSend(m)
	if err != nil {
		log.Printf(`邮件发送失败，err：%v`, err)
		return false
	}
	return true
}
