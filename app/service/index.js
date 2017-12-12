const { Producto, Usuario, Venta } = require("../models/");

module.exports.BuscarUsuario = function BuscarUsuario(req, res) {
    let request = req.params.id ? Usuario.findById(req.params.id) : Usuario.find();
    request.exec(function (err, respuesta) {
        if (err) {
            res.send(err);
        } else {
            res.send(respuesta);
        }
    });
};
module.exports.crearUsuario = function crearUsuario(req, res) {
    let usuario = new Usuario(Object.assign({}, req.body));
    usuario.save(function (err, item) {
        res.send(item);
    });
};
module.exports.BuscarProducto = function BuscarProducto(req, res) {
    let request = req.params.id ? Producto.findById(req.params.id) : Producto.find();
    request.exec(function (err, respuesta) {
        if (err) {
            res.send(err);
        } else {
            res.send(respuesta);
        }
    });
};
module.exports.crearProducto = function crearProducto(req, res) {
    let producto = new Producto(Object.assign({}, req.body));
    producto.save(function (err, item) {
        res.send(item);
    });
};
module.exports.BuscarVenta = function BuscarVenta(req, res) {
    let request = req.params.id ? Venta.findById(req.params.id) : Venta.find();
    request.populate('usuario').populate('producto');
    request.exec(function (err, respuesta) {
        if (err) {
            res.send(err);
        } else {
            res.send(respuesta);
        }
    });
};
module.exports.crearVenta = function crearVenta(req, res) {
    let venta = new Venta(Object.assign({}, req.body));
    venta.save(function (err, item) {
        res.send(item);
    });
};