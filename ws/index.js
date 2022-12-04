const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const busboy = require('connect-busboy');
const busboyBodyParser = require('busboy-body-parser');
require('./database')

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json())
app.use(busboy());
app.use(busboyBodyParser());
app.use(cors());


//VARIABLES
app.set('port', 8000);

//ROTAS
app.use('/salao', require('./src/routes/salao.routes'))

app.listen(app.get('port'), () => {
    console.log(`WS escutando na porta ${app.get('port')}`)
});