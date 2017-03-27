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

/* GET genetics page. */
router.get('/genetics', (req, res, next) => {
  indexController.DisplayGenetics(req, res);
});


/* GET mtioDisease page. */
router.get('/mitoDisease', (req, res, next) => {
  indexController.DisplayMitoDisease(req, res);
});

/* GET policy page. */
router.get('/policy', (req, res, next) => {
  indexController.DisplayPolicy(req, res);
});

/* GET resources page. */
router.get('/resources', (req, res, next) => {
  indexController.DisplayResources(req, res);
});

/* GET whatIs page. */
router.get('/whatIs', (req, res, next) => {
  indexController.DisplayWhatIs(req, res);
});

/* GET who are we page. */
router.get('/WhoAreWe', (req, res, next) => {
  indexController.DisplayWhoAreWe(req, res);
});

router.get('/api/diseases', (req, res, next) => {
  res.render('diseases/list', {
    title: "Diseases List",
    diseases: '',
    displayName: ""
  });
});

module.exports = router;
