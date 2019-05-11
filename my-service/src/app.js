const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World - from my-service '))
app.get('/api/some-endpoint', (req, res) => res.send('data from my-service API '))

app.get('*', (req, res) => {
  res.send('route not matched');
})


module.exports = app;
