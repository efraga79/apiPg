require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.use(express.static(__dirname + '/public'))

server.listen(process.env.PORT, () => {
	console.log(`Rodando no endereço: ${process.env.BASE}`)
})