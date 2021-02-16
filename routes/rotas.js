const express = require('express')
const rotas = express.Router()
//const model = require('../models')
//const controler = require('../controllers')
const path = require('path');


//Página inicial do site
rotas.get('/', (req,res) => {
    return res.sendFile(path.join(__dirname+'/index.html'));
})

//rotas.get('/casas', (req,res) => {
//    return res.sendFile(path.join(__dirname+'/index.html'));
//})

//rotas.get('/apartamentos', (req,res) => {
    //return res.sendFile(path.join(__dirname+'/index.html'));
//})

rotas.get('/contato', (req,res) => {
    return res.sendFile(path.join(__dirname+'/index.html'));
})

rotas.get('/sobre', (req,res) => {
    return res.sendFile(path.join(__dirname+'/index.html'));
})

/*
//Arquivo JSON com os repositórios da Takenet no github
routes.get('/repositories', async function(req, res) {
    const repositories = await model.getRepositories();
    res.send(repositories);
});

//Arquivo JSON com os repositórios da Takenet no github
routes.get('/lastRepositories', async function(req, res) {
    const lastRepositories = await controler.LastFiveRespositoriesCSharp();
    res.send(lastRepositories);
});
*/

module.exports = rotas