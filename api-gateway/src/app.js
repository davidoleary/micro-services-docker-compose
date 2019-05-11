const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World - from api-gateway ')
});

app.get('/forward-to-other-service', (req, res) => {
  fetch(`${process.env.MY_SERVICE}/api/some-endpoint`)
    .then(res => res.text())
    .then((data) => {
      res.send(`data from other service: ${data}`);
    }).catch((err) => {
      res.status(500).send(err);
    })
});

module.exports = app;
