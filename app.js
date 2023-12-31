const express = require("express");
const app = express();
const port = 3000;

// plantillas vista
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", {titulo : "mi titulo dinamico"});
});

app.get("/servicios", (req, res) => {
  res.render("servicios", {tituloServicios: "Mensaje de Servicios"});
});

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log("servidorsito:", port);
});
