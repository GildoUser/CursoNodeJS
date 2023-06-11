// EStudo ARROW function

//maneira comum  de function

function sum(n1, n2) {
  return n1 + n2;
}

console.log(sum(1, 3));

function funcaoComum(param1) {
  return console.log(`Esta é uma: ${param1}`);
}

funcaoComum("Função comum");

// Esta é uma function anonima EU NÃO DECLAREI function
const funcaoAnonima = (num1, num2) => {
  return console.log(`Esta é uma função anonima ${num1 + num2}`);
};

funcaoAnonima(2, 3);
// Exemplo de arrow function anonima

// // Toda Arrow function anonima

const soma = (param1, param2) => param1 + param2;

console.log(soma(3, 3));

// Exemplo de arrow function nomeada
const arrowF = () => {
  return console.log("Oi. Eu sou uma Arrow Function Nomeada!");
};

arrowF();
