require('./server/config/config.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(require('./server/routes/usuario'))

mongoose.connect('mongodb://localhost:27017/cocoa', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log("Base de datos en linea")
    }
});

app.listen(process.env.PORT, () => {
    console.log("Escuchando en el puerto", process.env.PORT)
})