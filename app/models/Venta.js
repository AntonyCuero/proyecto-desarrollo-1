const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

let ventaSchema = {
    productos: [{
        cantidad: { type: Number },
        producto: { type: ObjectId, ref: 'Producto' }
    }],
    usuario: { type: ObjectId, ref: 'Usuario' }
}
let venta_model = new Schema(ventaSchema, { versionKey: false, timestamps: true });
module.exports = mongoose.model("Venta", venta_model);