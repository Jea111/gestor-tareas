const mysql = require("mysql2");
const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // para poder usar el método POST

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mandingas",
});

connection.connect((error, list) => {
  if (error) {
    throw error;
  } else {
    console.log(" 🎯Conectado a la base de datos");
  }
});

//ruta para agregar un nuevo producto a la base de datos
app.get("/", (req, res) => {
  res.send("agregado con exito");
});

//puerto de escucha del servidor
app.listen(8000, () => {
  console.log("Servidor corriendo en el puerto 8000 http://localhost:8000");
});

//consulta de la tabla 'menu' de la base de datos 'practicaWebConCarrito'
const menu = "SELECT * FROM `menu`";

connection.query(menu, function (error, lista) {
  if (error) {
    throw error;
  } else {
    console.log("la lista de menu es: ", lista);
  }
});
