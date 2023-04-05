const constants = require('../config/constants.json')
const msgFunc = require('../config/bot_msg')
const http = require('request')

module.exports.newLid = async (req, res) => {
    console.log(req.body)
    let msg = msgFunc(req.body.name, req.body.phone, req.body.companyName, req.body.question)
    msg = encodeURI(msg)
    try {
        http.post(`https://api.telegram.org/bot${constants.telegramToken}/sendMessage?chat_id=${constants.telegramChatId}&parse_mode=html&text=${msg}`,
            function (error, response) {
                // не забываем обработать ответ
                console.log('error:', error)
                if (response.statusCode === 200) {
                    res.status(201).json({ message: 'Заказ успешно создан!' })
                }
                if (response.statusCode !== 200) {
                    res.status(400).json({ status: 'error', message: 'Произошла ошибка!' })
                }
            })
    } catch (e) {
        console.log(e)
        res.end()
    }
}