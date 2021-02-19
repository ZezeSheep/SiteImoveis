/**
 * Este módulo é responsável por criar as tabelas no banco de dados.
 * Ele recebe um objeto com as tabelas definidas no módulo "database" e as cria no banco de dados mysql.
 * OBS: UTILIZAR ESSE MÓDULO SOMENTE DURANTE A CRIAÇÃO DO BANCO DE DADOS. CASO USE ELE APÓS TER DADOS ARMAZENADOS
 * ELE IRA APAGAR TODOS OS DADOS DO BANCO DE DADOS E RECRIAR AS TABELAS.
 */

const database = require('./database');

database.Usuarios.sync({force: true})
database.Apartamentos.sync({force: true})
database.Casas.sync({force: true})