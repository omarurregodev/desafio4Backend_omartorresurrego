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

const productos = [];

const routerProductos = express.Router();

app.use('/productos', routerProductos);


routerProductos.get("/", (req, res) => {
    res.json({ productos });
})

routerProductos.get('/:id', (req, res) => {
    const productId = productos.filter(data => data.id === req.params);
    console.log(productId);
    res.json({productId})
})

routerProductos.post("/", (req, res) => {
    if (productos.length > 0) {
        const idUltimo = productos.sort((a, b) => b.id - a.id)[0].id;
        req.body.id = idUltimo + 1;
        console.log(req.body);
        productos.push(req.body);
        res.json({"mensaje" : "se agrego el producto con ID: " + req.body.id})
    } else {
        req.body.id = 1;
        console.log(req.body);
        productos.push(req.body);
        res.json({"mensaje" : "se agrego el producto con ID: " + req.body.id})
    }
})