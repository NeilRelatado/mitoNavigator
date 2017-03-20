// modules required for routing
let express = require('express');
let router = express.Router();

// require the index controller
let indexController = require('../controllers/index');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  indexController.DisplayHome(req, res);
});

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  indexController.DisplayContact(req, res);
});

router.get('/api/diseases', (req, res, next) => {
  res.render('diseases/list', {
    title: "Diseases List",
    diseases: '',
    displayName: ""
  });
});

module.exports = router;
