const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes/rotas')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const database = require('./models/database');

// Seta a porta da aplicação
porta = process.env.PORT || 21262;

const app = express()

// Configura o template engine da aplicação
app.engine('handlebars',handlebars({defaultLayout: 'main'}))
app.set('view engine','handlebars')

// Configura os módulos de auxilio da aplicação
    //Morgan
    app.use(morgan('dev'))
    //Express
    app.use(express.json())
    //Cors
    app.use(cors())
    //Rotas
    app.use(routes)
    app.use(express.static('routes'));
    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/routes/imgs/favicon.ico'));
app.use('/favicon.ico', express.static('imgs/favicon.ico'));

app.get('/apartamentos', function(req, res){
    database.Apartamentos.findAll().then(function(apartamentos){
        console.log(apartamentos)
        res.render('home',apartamentos)
    })
})

app.get('/cadastrar-imovel',function(req, res){
    res.render('formulario_imovel');
})

app.get('/cadastrar-usuario',function(req, res){
    res.render('formulario_usuario');
})

app.post('/add-imovel',function(req, res){
    if(req.body.tipo==1){//Apartamento
        database.Apartamentos.create({
            titulo: req.body.titulo_imovel,
            descricao: req.body.descricao_imovel,
            comodidades: req.body.comodidades_imovel,
            endereco: req.body.endereco_imovel,
            cep: req.body.cep_imovel,
            num_quartos: req.body.num_quartos,
            num_banheiro: req.body.num_banheiros,
            num_garagem: req.body.num_garagens,
            area: req.body.area_imovel,
            aluguel: req.body.aluguel,
            condominio: req.body.condominio,
            iptu: req.body.iptu,
            imagem: req.body.imagem
        }).then(function (){
            res.send('Apartamento cadastrado com sucesso!');
            res.redirect("/")
        }).catch(function(erro){
            res.send('Opps, tivemos um erro ao acessar o banco de dados, tente novamente mais tarde.');
            console.log("erro: "+erro)
        })
    } else{//Casa
        database.Casas.create({
            titulo: req.body.titulo_imovel,
            descricao: req.body.descricao_imovel,
            comodidades: req.body.comodidades_imovel,
            endereco: req.body.endereco_imovel,
            cep: req.body.cep_imovel,
            num_quartos: req.body.num_quartos,
            num_banheiro: req.body.num_banheiros,
            num_garagem: req.body.num_garagens,
            area: req.body.area_imovel,
            aluguel: req.body.aluguel,
            condominio: req.body.condominio,
            iptu: req.body.iptu,
            imagem: req.body.imagem
        }).then(function (){
            res.send('Casa cadastrada com sucesso!');
            res.redirect("/")
        }).catch(function(erro){
            res.send('Opps, tivemos um erro ao acessar o banco de dados, tente novamente mais tarde.');
            console.log("erro: "+erro)
        })
    }
})

app.post('/add-usuario',function(req, res){
    database.Usuarios.create({
        cpf: req.body.cpf,
        nome: req.body.nome,
        telefone: req.body.telefone,
        renda: req.body.renda,
        senha: req.body.senha
    }).then(function (){
        res.send('Usuário cadastrado com sucesso!');
        res.redirect("/")
    }).catch(function(erro){
        res.send('Opps, tivemos um erro ao acessar o banco de dados, tente novamente mais tarde.');
        console.log("erro: "+erro)
    })
    
})

// Configura a API para escutar na porta 21262
app.listen(porta, () => {
    console.log(`server created and running at http://localhost:${porta}`)
}) 
  