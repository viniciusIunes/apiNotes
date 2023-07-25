module.exports = {
  bail: true, // quando algum teste falhar ele para a execução
  coverageProvider: "v8",

  testMatch: [
    "<rootDir>/src/**/*.spec.js" // * = quer dizer que pode está em qualquer pasta com qualquer nome. rootDir - variável global do jest 
                                // que vai pegar a raiz do nosso projeto
  ],
}