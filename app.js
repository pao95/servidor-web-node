const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const hbs = require("hbs");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// servir contenido estatico
app.use(express.static("public"));
app.get("/", function (req, res) {
  res.render("home", {
    nombre: "Paola Hinostroza",
    titulo: "Curso de Node",
  });
});
app.get("/generic", function (req, res) {
  res.render("generic", {
    nombre: "Paola Hinostroza",
    titulo: "Curso de Node",
  });
});
app.get("/elements", function (req, res) {
  res.render("elements", {
    nombre: "Paola Hinostroza",
    titulo: "Curso de Node",
  });
});

app.listen(port);
