(function () {
    'use strict';
    const express = require("express");
    const bodyParser = require("body-parser");
    const app = express();
    const cors = require("cors");
    const { connect } = require('./app/db');
    const { BuscarUsuario, crearUsuario, BuscarProducto, crearProducto, editarProducto, BuscarVenta, crearVenta } = require('./app/service/');
    const port = 8585;
    
    connect();
    app.set('port', port)
    app.use(cors());
    app.use(bodyParser.json({limit: '10mb'}));
    app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
    app.all('/*',cors());

    //Usuarios
    app.get("/api/usuarios", BuscarUsuario);
    app.get("/api/usuario/:id", BuscarUsuario);
    app.post("/api/usuario", crearUsuario);
    //Productos
    app.get("/api/productos", BuscarProducto);
    app.get("/api/producto/:id", BuscarProducto);
    app.post("/api/producto", crearProducto);
    app.put("/api/producto/:id", editarProducto);
    //Ventas
    app.get("/api/ventas", BuscarVenta);
    app.get("/api/venta/:id", BuscarVenta);
    app.post("/api/venta", crearVenta);

    app.listen(port, function() {
        console.log(`backend corriendo en http://localhost:${port}/api/**`)
    });

})();
