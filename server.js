process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const configureMongoose = require('./config/mongoose');
const configureExpress = require('./config/express');
const configurePassport = require('./config/passport');

const db = configureMongoose();
const app = configureExpress();
const passport = configurePassport();

const localPort = 3000;
let port = process.env.port || localPort;

app.listen(port);
module.exports = app;

console.log('Server running at http://localhost:' + port +'/');