const express = require('express')
const { mongo } = require('mongoose')
const app = require('./routes/routes')

const server =  express()
const port = 3000

server.use(express.json())
server.use(app)

server.listen(port, err => !err ? console.log('server is running...'): console.log("server is not running..."))


batata
mongo
ferrou!