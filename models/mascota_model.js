const mongoose = require("mongoose");

const mascota_local = new mongoose.Schema({
  Nombre: { type: String, required: true },
  Edad: {type: Number, require: true},
  Animal: { type: String, required: true },
  Raza: { type: String, required: true },
  Fecha: { type: Date, default: Date.now, required: true },
  Dueno: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true
  },
  Vacunas: [String],
});

module.exports = mongoose.model("Pet", mascota_local);
