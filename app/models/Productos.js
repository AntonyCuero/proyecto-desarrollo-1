const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productoSchema = {
    imagen: String, 
    nombre: String, 
    precio: Number
}
let producto_model = new Schema(productoSchema, { versionKey: false, timestamps: true  });
module.exports = mongoose.model("Producto", producto_model);