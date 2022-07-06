const express = require('express')
const app = express()
require('dotenv').config()

//importar conect a db
const archivoDb = require('./conexion')

//configurar server basico

app.listen(process.env.PORT, ()=>{

    console.log('server on', process.env.PORT);
})

app.get('/', (req,res) =>{
    res.send('con nodemon es mejor, claro que si')  
})