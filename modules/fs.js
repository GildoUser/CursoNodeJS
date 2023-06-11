const { log, error } = require("console");
const fs = require("fs");
const path = require("path");

// Criar uma pasta - Caso já exista vai ocorrer erro
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//     if (error) {
//         return console.log('Error: ', error);
//     }

//     console.log('Pasta criada com sucesso!');
// });

// Criar um arquivo ( diretório atual, pasta seguinte, arquivo )
// fs.writeFile(
//   path.join(__dirname, "/test", "test.txt"),
//   "Hello Node!!!",
//   (error) => {
//     if (error) {
//       return console.log("Erro: ", error);
//     }

//     console.log("Arquivo criado com sucesso!");
//   }
// );

// Adicionar à um arquivo( diretório atual, pasta seguinte, arquivo )
// fs.appendFile(
//   path.join(__dirname, "/test", "test.txt"),
//   "Hello World!!",
//   (error) => {
//     if (error) {
//       return console.log("Erro: ", error);
//     }
//     console.log("Arquivo modificado com sucesso!");
//   }
// );

// // Ler arquivo ( diretório atual, pasta seguinte, arquivo, tipo de formatacao )
// fs.readFile(
//   path.join(__dirname, "/test", "test.txt"),
//   "utf8",
//   (error, data) => {
//     if (error) {
//       console.log("Erro: ", error);
//     }

//     console.log(data);
//   }
// );

// ////////////////////////// de acordo com o carinha, o correto é

// fs.writeFile(
//   path.join(__dirname, "/test", "test.txt"),
//   "Hello Node!!!",
//   (error) => {
//     if (error) {
//       return console.log("Erro: ", error);
//     }

//     console.log("Arquivo criado com sucesso!");

//     fs.appendFile(
//       path.join(__dirname, "/test", "test.txt"),
//       "Hello World!!",
//       (error) => {
//         if (error) {
//           return console.log("Erro: ", error);
//         }
//         console.log("Arquivo modificado com sucesso!");
//       }
//     );

//     fs.readFile(
//       path.join(__dirname, "/test", "test.txt"),
//       "utf8",
//       (error, data) => {
//         if (error) {
//           console.log("Erro: ", error);
//         }

//         console.log(data);
//       }
//     );
//   }
// );
