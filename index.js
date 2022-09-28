const express = require("express");
const app = express();
const mongoose = require("mongoose");

// MIDDLEWARE JSON
app.use(express.json());

// CONEXION MONGO
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.7uf1mex.mongodb.net/test-db?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Exito");
  })
  .catch((e) => {
    console.log(e);
    console.log("Jumbo");
  });

// RUTAS
const RouteMascota = require("./routes/route_mascota");
app.use("/Pet", RouteMascota);

const RouteCita = require("./routes/route_cita");
app.use("/Cita", RouteCita);

const RouteCliente = require("./routes/route_cliente");
app.use("/Cliente", RouteCliente);

const RouteVeterinario = require("./routes/route_veterinario");
app.use("/veterinario", RouteVeterinario);

// ABRIR PUERTO PARA APP
app.listen(3000, () => console.log("Hola Mundo"));
