// Uma promisse é um objeto

// Exemplo de Promise.
// let p = new Promise((resolve, reject) => {
//   let a = 1 + 3;
//   if (a == 2) {
//     resolve("Sucess");
//   } else {
//     reject("Failed");
//   }
// });

// // a promise tem 2 parametros em sua callback, resolve e reject

// // para chamar a promise, é necessário a seguinte sintaxe
// //then acata o primeiro parametro, é utilizado quando ocorre tudo ok
// //Then pega o resolve ///// Catch pega o reject
// p.then((message) => {
//   console.log("This is in the then", message);
// }).catch((err) => {
//   console.log("This is in the catch");
// });

// // Para transformar uma função existente em promise, é necessário a seguinte construção

// //

// const betterDeveloper = "Gil";

// function whoIsBetterCallback(callback, erroCallback) {
//   if (betterDeveloper != "Gil") {
//     // estou passando para a callback um objeto, LINHA 42
//     erroCallback({ name: "Tá errado", message: betterDeveloper + "? sério?!" });
//   } else {
//     callback({ name: betterDeveloper, message: "! Você vai ser um bom dev" });
//   }
// }

// // Agora com a promise construida, precisamos instanciar os callbacks

// whoIsBetterCallback(
//   // Agora que recebemos o parametro e a callback foi chamada, ela só executa uma função, de console.log( )
//   // ATENTE QUE para acessar o objeto recebido, vamos primeiramente no parametro ( result ) e
//   // acessamos os atributos ( result.name )
//   (result) => {
//     console.log(result.name + result.message);
//   },
//   (error) => {
//     console.log(error.name + " " + error.message);
//   }
// );

////////////////////////////////////////////////////////////////////////////////////////////
// Função que se torna uma promisse - É basicamente o mesmo cenário, porém
const betterDeveloper = "Gil";
// Na segunda linha escrita do código, iremos usar um >> return new Promise cujo chaves{esqueleto} envolve as decisões
function whoIsBetterCallback(callback, erroCallback) {
  // é preciso passar resolve e reject quando for chamar a callback da promisse
  return new Promise((resolve, reject) => {
    if (betterDeveloper != "Gil") {
      resolve({ name: "Não é meu nome \n", message: "Digite novamente!" });
    } else {
      reject({ name: "É o meu nome!!\n", message: "E ai meu chapa!" });
    }
  });
}

whoIsBetterCallback()
  .then((result) => {
    console.log(result.name + " saidaqui " + result.message);
  })
  .catch((error) => {
    console.log(error.name, error.message);
  });
