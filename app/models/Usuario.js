const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let usuarioSchema = {
    nombre: String,
    usuario: String,
    contrasena: String,
    rol: String
}
let usuario_model = new Schema(usuarioSchema, { versionKey: false, timestamps: true  });
module.exports = mongoose.model("Usuario", usuario_model);