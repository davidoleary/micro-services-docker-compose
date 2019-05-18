require('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT || 9002;

app.listen(PORT);

// eslint-disable-next-line no-console
console.log(`my-service  server now running on port ${PORT}`);
