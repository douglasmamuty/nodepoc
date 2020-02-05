const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

// const mysql = require('mysql');

const server = express();

mongoose.connect('mongodb+srv://rootNode:Root112358@cluster-4tekm.mongodb.net/dbTeste?retryWrites=true&w=majority',{
  useNewUrlParser: true
});

server.use(express.json());
server.use(routes);
server.listen(3333);