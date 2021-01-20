require('../config/config');
const express = require('express');
const app = express();
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');


app.post('/login', (req, res) => {
    let body = req.body;
    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {
        //errores de conexion o busqueda
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        //el usuario no existe
        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Usuario o contraseña incorrectos"
                }
            })
        }
        //las contraseñas no coinciden
        if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Usuario o contraseña incorrectos"
                }
            })
        }
        //generar token
        let token = jsonwebtoken.sign({
                usuario: usuarioDB
            }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN })
            //todo es correcto
        res.json({
            ok: true,
            token

        })
    })

})


module.exports = app;