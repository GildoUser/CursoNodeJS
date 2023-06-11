const express = require("express");

// requisição get
const app = express();

app.get("/home", (req, res) => {
  //adicionar o content-type
  res.contentType("text/html");
  res.status(200).send("<h1>hello world</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "John Doe",
      email: "john@doe.com",
    },
    {
      name: "Jane Doe",
      email: "jane@doe.com",
    },
  ];
  res.contentType("application/json");
  res.status(200).send(JSON.stringify(users));
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta: ${port}`));
