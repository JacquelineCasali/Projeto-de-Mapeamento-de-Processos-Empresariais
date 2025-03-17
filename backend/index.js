require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = 3000;
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  return res.status(200).send({ message: "olá meundo" });
});

app.listen(port, () => {
  console.log("Servidor rodando na http://localhost:" + port);
});
