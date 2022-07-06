const { Router } = require('express')
const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema

const schemaModel = new schema({
    nombre: String,
    nickname: String,
    email: String,
    id_user: String
})

const ModeloUsuario = mongoose.model('usuarios', schemaModel)
module.exports = router

//agregar usuario
router.post('/agregar-usuario', (req,res)=>{
    const nuevoUsuario = new ModeloUsuario({
        nombre: req.body.nombre,
        nickname: req.body.nickname,
        email: req.body.email,
        id_user: req.body.id_user
    })
    nuevoUsuario.save( (err)=>{
        if(!err){
            res.send('usuario agregado OK')
        }else{
            res.send(err)
        }
    })
})
//obtener todos los usuarios
router.get('/obtener-usuarios',  (req,res)=>{
    ModeloUsuario.find({}, (docs,err)=>{
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})
