const express = require("express");
const clienteM = require("../models/cliente_model");
const router = express.Router();

router.post("/", async (req, res) => {
  const cliente = new clienteM(req.cliente);
  await cliente.save();
  res.status(200);
});

router.get("/", async (req, res) => {
  const cliente = await clienteM.find({ id: req.id });
  res.status(200).json({
    result: cliente,
  });
});

router.put("/", async (req, res) => {
  const cliente = await clienteM.updateOne({ id: req.id },{ $set: req.body });
  res.status(200).json({
    result: cliente,
  });
});

router.delete("/", async (req, res) => {
  await clienteM.deleteOne({ id: req.id });
  res.status(200);
});

module.exports = router;
