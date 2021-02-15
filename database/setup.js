const Sequelize = require('sequelize');
const database = require('./bd');

const Usuarios = database.define('usuarios',{
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    renda: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Apartamentos = database.define('apartamentos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    comodidades: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false
    },
    num_quartos: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    num_banheiro: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    num_garagem: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    area: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    aluguel: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    condominio: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    iptu: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

const Casas = database.define('casas', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    comodidades: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false
    },
    num_quartos: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    num_banheiro: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    num_garagem: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    area: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    aluguel: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    condominio: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    iptu: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

//Usuarios.sync({force: true})
//Apartamentos.sync({force: true})
//Casas.sync({force: true})

module.exports = {
    Usuarios,
    Apartamentos,
    Casas
}
