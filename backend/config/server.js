const bodyParse = require('body-parser');
const express = require('express');

const server = express();
const port = 3003;

server.use(bodyParse.urlencoded({ extended: true }));
server.use(bodyParse.json());

server.listen(port, function() {
    console.log('Servidor On-line na porta: ' + port)
});

module.exports = server;