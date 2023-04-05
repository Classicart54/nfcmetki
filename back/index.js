const app = require('./app')
const express = require('express')
const http = require('http')
const server = http.createServer(app)
const port = process.env.PORT || 5000

app.use(express.json())


server.listen(port, () => console.log(`Сервер запущен на порту ${port}`))
