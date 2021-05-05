//instaciando o expres e bibiotecas
const express = require('express');
const mongoose = require('mongoose');
const server = express();

//definindo a porta e o hostnao
const port = 3000;
const hostname = "localhost";

//chamando as classes das rotas
const pessoa = require('./routes/pessoa-rotas');
const agenda = require('./routes/agenda-rotas');
const uniSaude = require('./routes/unisaude-rotas');

server.use(express.urlencoded({ extended: true }));
server.use(express.json());


//passando as rotas para as classes responsaveis
server.use('/api/pessoa/', pessoa);
server.use('/api/agenda/', agenda);
server.use('/api/unisaude/', uniSaude);

mongoose.connect('mongodb://root:paulo123@localhost:27017/devwebII?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'erro ao conectar no mongodb'));
db.once('open', function () {
    console.log('sucesso ao conectar no mongodb');
});

server.get('/', function (req, res) {
    res.json({
        status: "ok",
        message: "Servidor rodando"
    });
});

server.listen(port, hostname, function () {
    console.log(`Servidor rodando https://${hostname}:${port}`);
});