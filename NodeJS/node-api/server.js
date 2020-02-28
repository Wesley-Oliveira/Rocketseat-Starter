//importando o express e mongoose
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
// Permite que eu envie informações no formato de json
app.use(express.json());
// Permite a api ser vista por outros dominios publicamente
app.use(cors());

// Iniciando o DB
mongoose.connect('mongodb+srv://admin:admin123@cluster0-gke9r.mongodb.net/nodeapi?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
// Usando a biblioteca require-dir para pegar todos os models e criar no bd
requireDir('./src/models');

// Rotas
app.use("/api", require("./src/routes"));

//ouvindo na porta 3001, rodando na porta 3001
app.listen(3001); 