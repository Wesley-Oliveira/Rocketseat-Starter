//importando o express e mongoose
const express = require("express");
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect('mongodb+srv://admin:admin123@cluster0-gke9r.mongodb.net/nodeapi?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
requireDir('./src/models');

const Product = mongoose.model("Product");

//Definindo rota raiz
//req-> simboliza a requisição pro servidor (parâmetros, cabeçalho da requisição, usuário, ip)
//res-> resposta que vai dar para a requisição
app.get('/', (req, res) => {
    Product.create({
        title: "React teste",
        description: "Testando",
        url: "Teste"
    });

    return res.send("Hello ");
})

//ouvindo na porta 3001, rodando na porta 3001
app.listen(3001); 