const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes/rotas')

porta = process.env.PORT || 21262;

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use(routes)
//app.use('/static', express.static(__dirname + '/routes/imgs'));
app.use(express.static('routes'));

var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/routes/imgs/favicon.ico'));
app.use('/favicon.ico', express.static('imgs/favicon.ico'));

// Configura a API para escutar na porta 21262
app.listen(porta, () => {
    console.log(`server created and running at http://localhost:${porta}`)
}) 
  