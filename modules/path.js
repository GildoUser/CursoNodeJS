const { log } = require("console");
const path = require("path");

// Basename  -- Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Nome do diretório atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Criar objeto Path
console.log(path.parse(__filename));

//Juntar caminhos de arquivos  Podemos adicionar mais parametros,caso queiramos incluir mais diretórios CADA VIRGULA É UM \
console.log(path.join(__dirname, "test", "test.html"));
