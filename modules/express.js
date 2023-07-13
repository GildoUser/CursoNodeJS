const express = require("express");
const cors = require("cors");
const { Pessoa } = require("../person");
const app = express();
app.use(express.json());
app.use(cors());
app.get("/home", (req, res) => {
  console.log("Entrando");
  res.contentType("text/html");
  res.status(200).send("<h1>hello world</h1>");
});

app.post("/sendjson", (req, res) => {
  teste = req.body;
  console.log(teste);

  res.contentType("text/html");
  res.status(200).send("Dados recebidos com sucesso");
});

const port = 8080;

app.listen(port, () => console.log("Servidor rodando na porta: ", port));
