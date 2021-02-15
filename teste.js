const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste','root','40028922', {host:"localhost",dialect:"mysql"});

const Postagem = sequelize.define('postagem', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.sync({force: true});


/*sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!");
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro);
});*/