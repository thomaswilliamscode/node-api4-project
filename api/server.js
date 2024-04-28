const express = require('express')
const Middle = require('../api/middleware/middleware')

const userRouter = require('./users/users-router')

const server = express()

server.use(express.json());
server.use(Middle.logger)
server.use( '/api/users', userRouter)

server.get( '/', (req, res) => {
	res.status(200).send('We are linked!')
})

module.exports = server