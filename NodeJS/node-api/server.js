//importando o express
const express = require("express");

//executando a função express
const app = express();

//Definindo rota raiz
//req-> simboliza a requisição pro servidor (parâmetros, cabeçalho da requisição, usuário, ip)
//res-> resposta que vai dar para a requisição
app.get('/', (req, res) => {
    res.send("Hello ");
})

//ouvindo na porta 3001, rodando na porta 3001
app.listen(3001); 