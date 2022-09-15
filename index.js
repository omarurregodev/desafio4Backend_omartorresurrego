const express = require('express');
const multer = require('multer');
const { Router } = express();

const app = express();

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const server = app.listen(PORT, () => {
    try {
        console.log(`servidor iniciado en puerto: ${PORT}`);
    } catch (e) {
        console.log('Error iniciando Servidor' + e);
    }
})

app.use(express.static("public"));