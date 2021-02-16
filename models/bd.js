const Sequelize = require('sequelize');
const sequelize = new Sequelize('zizi_imoveis','root','40028922', {host:"localhost",dialect:"mysql"});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};