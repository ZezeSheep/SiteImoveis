const Sequelize = require('sequelize');
const sequelize = new Sequelize('zizi_imoveis','root','123456', {host:"localhost",dialect:"mysql"});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};