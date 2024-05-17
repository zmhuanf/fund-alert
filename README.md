# 基金价格告警程序

这是一个基金价格告警程序，其在每日14:30时自动通过邮件/方糖推送配置基金的今日涨跌预测。具体效果如下：

![效果图](path/to/image.png)

## 配置文件

需要在程序目录建立一个`config.json`配置文件，例子如下：

```json
{
  "email_user": "",
  "email_password": "",
  "email_to": [
    "",
    ""
  ],
  "key": [
    ""
  ],
  "threshold": 0.2,
  "fund_code": [
    "",
    ""
  ]
}
```
```text
配置项解释如下：
email_user -> 发送方的邮件地址
email_password -> 发送方的邮箱key（不是邮箱密码）
email_to -> 接收方的邮箱地址
key -> 方糖的key
threshold -> 当日涨跌预警的阈值，只有当今日的预计涨跌大于阈值是才会出现在今日涨跌预警中
fund_code -> 监视的基金代码
```
