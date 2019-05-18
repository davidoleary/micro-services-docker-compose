const express = require('express');
const uuidv4 = require('uuid/v4');
const bodyParser = require('body-parser');
const businessLogic = require('./business-logic');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello World - from my-service '));
app.get('/api/some-endpoint', (req, res) => {
  const result = businessLogic.add(4, 6);
  res.send(`data from my-service API - ${result}`);
});

app.get('/api/v1/idcode', (req, res) => {
  res.json({ id: uuidv4() });
});

app.post('/api/v1/idcode', (req, res) => {
  res.send(`you posted ${req.body.id}`);
});

app.get('*', (req, res) => {
  res.send('route not matched');
});

module.exports = app;
