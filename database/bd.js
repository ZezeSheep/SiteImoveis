const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste','root','40028922', {host:"localhost",dialect:"mysql"});

module.exports = sequelize;