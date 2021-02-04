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
app.use('/static', express.static(__dirname + '/routes/imgs'));

// Configura a API para escutar na porta 21262
app.listen(porta, () => {
    console.log(`server created and running at http://localhost:${porta}`)
})
 