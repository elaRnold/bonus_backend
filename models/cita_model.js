const mongoose = require("mongoose");

const cita_local = new mongoose.Schema({
  Fecha: { type: Date, default: Date.now, required: true },
  veterinario: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doc',
    required: true},
  Dueno: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true},
  Mascota: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet',
    required: true
  },
});

module.exports = mongoose.model("Cita", cita_local);
