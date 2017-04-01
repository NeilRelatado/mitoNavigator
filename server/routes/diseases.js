// modules required for routing
let express = require('express');
let router = express.Router();

// define the disease model
let disease = require('../models/diseases');

// require the users controller for authentication
let usersController = require('../controllers/users');

// require the diseases controller to access diseases collection in findById
let diseasesController = require('../controllers/diseases');

/* GET diseases List page. READ */
router.get('/', (req, res, next) => {
  diseasesController.ReadDiseaseList(req, res);

});

//  GET the Disease Details page in order to add a new Disease
router.get('/add', usersController.RequireAdminAuth, (req, res, next) => {
  diseasesController.DisplayAdd(req, res);
}).post('/add', usersController.RequireAdminAuth, (req, res, next) => {
  // POST process the Disease Details page and create a new Disease - CREATE
  diseasesController.CreateDisease(req, res);
});

// GET the Disease Details page in order to edit a new Disease
router.get('/:id', usersController.RequireAdminAuth, (req, res, next) => {
  diseasesController.DisplayEdit(req, res);
}).post('/:id', usersController.RequireAdminAuth, (req, res, next) => {
  // POST - process the information passed from the details form and update the document
  diseasesController.UpdateDisease(req, res);
});

// GET - process the delete by user id
router.get('/delete/:id', usersController.RequireAdminAuth, (req, res, next) => {
  diseasesController.DeleteDisease(req, res);
});

module.exports = router;
