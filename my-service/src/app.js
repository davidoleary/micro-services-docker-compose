const express = require('express');
const businessLogic = require('./business-logic');
const app = express();

app.get('/', (req, res) => res.send('Hello World - from my-service '))
app.get('/api/some-endpoint', (req, res) => {
  const result = businessLogic.add(4, 6);
  res.send(`data from my-service API - ${result}`);
})

app.get('*', (req, res) => {
  res.send('route not matched');
})


module.exports = app;
