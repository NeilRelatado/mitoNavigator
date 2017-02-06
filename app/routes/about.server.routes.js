module.exports = function(app) {
const index = require('../controllers/about.server.controller');
app.get('/about', index.render);
};