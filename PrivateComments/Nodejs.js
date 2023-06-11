//Estrutura básica http server
var http = require("http");
const port = 8080;
// var dt = require("./myfirstmodule");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("The date and time are currently: " + dt.myDateTime());
//     res.end();
//   })
//   .listen(8080);

// podemos criar tambem de uma forma mais prática
const server = http.createServer((req, res) => {
  if (req.url === "/homee") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<H1>Hello Node!</H1>");
  }
});

server.listen(port, () => console.log(`Rodando na porta ${port}`));
