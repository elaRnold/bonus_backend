const mongoose = require("mongoose");

const cliente_local = new mongoose.Schema({
  Nombre: { type: String, required: true },
  Edad: {type: Number, require: true},
  Cedula: {type: Number, require: true},
  Fecha: { type: Date, default: Date.now, required: true },
});

module.exports = mongoose.model("Cliente", cliente_local);
