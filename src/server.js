const express = require('express')
const app = require('./routes')

const server =  express()
const port = 3000

server.use(express.json())
server.use(app)

server.listen(port, err => !err ? console.log('server is running...'): console.log("server is not running..."))


