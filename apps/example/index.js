const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('./db/mongo');
const vhost = require('vhost');

const app = express();

app.use(bodyParser.json());

// lendo rotas
var routes = require("path").join(__dirname+"/routes");
require("fs").readdirSync(routes).forEach(function(file) {
    app.use('/api', require("./routes/" + file));
});

mongo.connect();

// app.use(vhost('mongode.local', app));

// app.listen(9000, () => console.log('Server ativo na porta 9000'));

module.exports = app;