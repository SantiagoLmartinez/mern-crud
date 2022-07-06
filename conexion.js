const mongoose = require('mongoose')
require('dotenv').config()


mongoose.connect(`mongodb+srv://${process.env.MONGO_HOST}:${process.env.MONGO_DB}@cluster0.mont3.mongodb.net/?retryWrites=true&w=majority`)

const objetoDb = mongoose.connection

objetoDb.on('connected', () =>(console.log('CONECTADO')))
objetoDb.on('error', () =>(console.log('ERROR AL CONECTAR')))

module.exports = mongoose