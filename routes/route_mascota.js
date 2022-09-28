const express = require("express");
const mascotaM = require("../models/mascota_model");
const router = express.Router();

router.post("/", async (req, res) => {
  const mascota = new mascotaM(req.mascota);
  await mascota.save();
  res.status(200);
});

router.get("/", async (req, res) => {
  const mascota = await mascotaM.find({ id: req.id });
  res.status(200).json({
    result: mascota,
  });
});

router.put("/", async (req, res) => {
  const mascota = await mascotaM.updateOne({ id: req.id },{ $set: req.body });
  res.status(200).json({
    result: mascota,
  });
});

router.delete("/", async (req, res) => {
  await mascotaM.deleteOne({ id: req.id });
  res.status(200);
});

module.exports = router;
