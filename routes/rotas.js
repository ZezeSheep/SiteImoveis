/**
 * Este módulo é responsável por definir as rotas da aplicação
 */

const express = require('express')
const rotas = express.Router()
//const path = require('path');
const database = require('../models/database');

//Página inicial do site
rotas.get('/', (req,res) => {
    res.render('index');
})

rotas.get('/contato', (req,res) => {
    res.render('contato');
})

rotas.get('/sobre', (req,res) => {
    res.render('sobre');
})

rotas.get('/apartamentos', function(req, res){
    database.Apartamentos.findAll().then(function(apartamentos){
         res.render('exibir_apartamentos',{imovel: apartamentos})
     })
 })
 
rotas.get('/casas', function(req, res){
     database.Casas.findAll().then(function(casas){
          res.render('exibir_casas',{imovel: casas})
      })
})
 
rotas.get('/cadastrar-apartamento',function(req, res){
     res.render('formulario_apartamento');
})

rotas.get('/cadastrar-casa',function(req, res){
    res.render('formulario_casa');
})
 
 rotas.get('/cadastrar-usuario',function(req, res){
     res.render('formulario_usuario');
 })

 rotas.post('/agendar-visita',function (req,res){
    res.render("sucesso_formulario")
 })

 rotas.post('/add-apartamento',function(req, res){
    let armario_embutido = req.body.armario_embutido == "Sim"
    let condominio_24h = req.body.condominio_24h == "Sim"
    database.Apartamentos.create({
        titulo: req.body.titulo_imovel,
        descricao: req.body.descricao_imovel,
        endereco: req.body.endereco_imovel,
        andar: req.body.andar,
        num_quartos: req.body.num_quartos,
        num_suites: req.body.num_suites,
        num_salas_estar: req.body.num_salas_estar,
        num_salas_jantar: req.body.num_salas_jantar,
        num_garagem: req.body.num_garagens,
        area: req.body.area_imovel,
        possui_armario_embutido: armario_embutido,
        aluguel: req.body.aluguel,
        condominio: req.body.condominio,
        possui_condominio_24h: condominio_24h,
        imagem: req.body.imagem
    }).then(function (){
        res.render("sucesso_formulario")
    }).catch(function(erro){
        res.send('Opps, tivemos um erro ao acessar o banco de dados, tente novamente mais tarde.');
        console.log("erro: "+erro)
    })
 })
 
 rotas.post('/add-casa',function(req, res){
    let armario_embutido = req.body.armario_embutido == "Sim"
    database.Casas.create({
        titulo: req.body.titulo_imovel,
        descricao: req.body.descricao_imovel,
        endereco: req.body.endereco_imovel,
        num_quartos: req.body.num_quartos,
        num_suites: req.body.num_suites,
        num_salas_estar: req.body.num_salas_estar,
        num_garagem: req.body.num_garagens,
        area: req.body.area_imovel,
        possui_armario_embutido: armario_embutido,
        aluguel: req.body.aluguel,
        condominio: req.body.condominio,
        iptu: req.body.iptu,
        imagem: req.body.imagem
    }).then(function (){
        res.render("sucesso_formulario")
    }).catch(function(erro){
        res.send('Opps, tivemos um erro ao acessar o banco de dados, tente novamente mais tarde.');
        console.log("erro: "+erro)
    })
 })
 
 rotas.post('/add-usuario',function(req, res){
     database.Usuarios.create({
         cpf: req.body.cpf,
         nome: req.body.nome,
         telefone: req.body.telefone,
         renda: req.body.renda,
         senha: req.body.senha
     }).then(function (){
        res.render("sucesso_formulario")
     }).catch(function(erro){
         res.send('Opps, tivemos um erro ao acessar o banco de dados, tente novamente mais tarde.');
         console.log("erro: "+erro)
     })  
 })



module.exports = rotas