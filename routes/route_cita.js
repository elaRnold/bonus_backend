const express = require("express");
const citaM = require("../models/cita_model");
const router = express.Router();

router.post("/", async (req, res) => {
  const cita = new citaM(req.cita);
  await cita.save();
  res.status(200);
});

router.get("/", async (req, res) => {
  const cita = await citaM.find({ id: req.id });
  res.status(200).json({
    result: cita,
  });
});

router.put("/", async (req, res) => {
  const cita = await citaM.updateOne({ id: req.id }, { $set: req.body });
  res.status(200).json({
    result: cita,
  });
});

router.delete("/", async (req, res) => {
  await citaM.deleteOne({ id: req.id });
  res.status(200);
});

module.exports = router;
