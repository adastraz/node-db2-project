const express = require('express')
const helmet = require('helmet')
const CarRouter = require('./cars/car-router.js')
const server = express()

server.use(express.json())
server.use(helmet())

server.use('/api/cars', CarRouter)

module.exports = server