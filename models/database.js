/*
Este módulo é responsável por descrever as tabelas do banco de dados.
Retorna um objeto com as tabelas.
*/

const database = require('./bd');
const Sequelize = database.Sequelize;

const Usuarios = database.sequelize.define('usuarios',{
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

const Apartamentos = database.sequelize.define('apartamentos', {
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
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    andar: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    num_quartos: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    num_suites: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    num_salas_estar: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    num_salas_jantar: {
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
    possui_armario_embutido: {
        type: Sequelize.BOOLEAN,
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
    possui_condominio_24h: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    imagem: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Casas = database.sequelize.define('casas', {
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
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    num_quartos: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    num_suites: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    num_salas_estar: {
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
    possui_armario_embutido: {
        type: Sequelize.BOOLEAN,
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
    },
    imagem: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Agendamentos = database.sequelize.define('agendamentos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    UsuarioID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Usuarios,
            key: 'cpf'
        }
    },
    CasaID: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: Casas,
            key: 'id'
        }
    },
    ApartamentoID: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: Apartamentos,
            key: 'id'
        }
    }
})

module.exports = {
    Usuarios,
    Apartamentos,
    Casas,
    Agendamentos
}
