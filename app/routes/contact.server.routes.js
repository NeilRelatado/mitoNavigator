module.exports = function(app) {
const index = require('../controllers/contact.server.controller');
app.get('/contact', index.render);
};