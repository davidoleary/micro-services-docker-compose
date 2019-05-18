const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World - from api-gateway');
});

app.get('/forward-to-other-service', (req, res) => {
  fetch(`${process.env.MY_SERVICE}/api/some-endpoint`)
    .then(response => response.text())
    .then((data) => {
      res.send(`data from other service: ${data}`);
    }).catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/api/v1/id', (req, res) => {
  fetch(`${process.env.MY_SERVICE}/api/v1/idcode`)
    .then(response => response.text())
    .then((data) => {
      res.send(data);
    }).catch((err) => {
      res.status(500).send(err);
    });
});

app.post('/api/v1/id', (req, res) => {
  fetch(`${process.env.MY_SERVICE}/api/v1/idcode`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: req.body.id }), // forward only data we need
  })
    .then(response => response.text())
    .then((data) => {
      res.send(data);
    }).catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = app;
