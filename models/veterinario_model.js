const mongoose = require("mongoose");

const veterinario_local = new mongoose.Schema({
  Nombre: { type: String, required: true },
  Nacionalidad: { type: String, required: true },
  Edad: {type: Number, require: true},
  Cedula: {type: Number, require: true},
  Fecha: { type: Date, default: Date.now, required: true },
});

module.exports = mongoose.model("Doc", veterinario_local);