const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.send(`Hello World, ${req.query.name}`);  
});

routes.post('/devs', (req, res) => {
  console.log(req.body);
  return res.json({ message: 'ok'});
});

module.exports = routes;