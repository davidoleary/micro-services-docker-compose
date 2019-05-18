require('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT || 9000;

app.listen(PORT);

// eslint-disable-next-line no-console
console.log(`api-gateway server now running on port ${PORT}`);
