const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const route = require('./routes/index.routes')

const server = express()

//configuracion de middlewares
server.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

server.use(express.json())
server.use(cookieParser())
server.use(morgan('dev'))

server.use(route)







module.exports = server