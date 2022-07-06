const express = require('express')
const app = express()
require('dotenv').config()

//importar conect a db
const archivoDb = require('./conexion')

//importamos rutas y modelo de usuario
const ruta_usuario = require('./Routes/usuario.routes')

//importamos bodyParser

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))

app.use('/api/usuario', ruta_usuario)
app.get('/', (req,res) =>{
    res.send('con nodemon es mejor, claro que si')  
})

//configurar server basico
app.listen(process.env.PORT, ()=>{

    console.log('server on', process.env.PORT);
})

