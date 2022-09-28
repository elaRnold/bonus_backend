const express = require("express");
const veterinarioM = require("../models/veterinario_model");
const router = express.Router();


router.post("/", async (req, res) => {
  const veterinario = new veterinarioM(req.veterinario);
  await veterinario.save();
});

router.get("/", async (req, res) => {
  const veterinario = await veterinarioM.find({ id: req.id });
  res.status(200).json({
    result: veterinario,
  });
});

router.put("/", async (req, res) => {
  const veterinario = await veterinarioM.updateOne({ id: req.id },{ $set: req.body });
  res.status(200).json({
    result: veterinario,
  });
});

router.delete("/", async (req, res) => {
  await veterinarioM.deleteOne({ id: req.id });
  res.status(200);
});

module.exports = router;
