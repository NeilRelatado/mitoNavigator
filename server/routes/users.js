// modules required for routing
let express = require('express');
let router = express.Router();

let ExpressBrute = require('express-brute'),
    moment = require('moment');
let store = new ExpressBrute.MemoryStore();

failCallback = function (req, res, next, nextValidRequestDate) {
    req.flash('error', "You've made too many failed attempts in a short period of time, please try again "+moment(nextValidRequestDate).fromNow());
    res.redirect('/login');
}
let handleStoreError = function (error) {
    log.error(error); // log this error so we can figure out what went wrong 
    // cause node to exit, hopefully restarting the process fixes the problem 
    throw {
        message: error.message,
        parent: error.parent
    };
}
let bruteforce = new ExpressBrute(store, {
   freeRetries: 5,
    minWait: 5*60*1000, // 5 minutes 
    maxWait: 60*60*1000, // 1 hour, 
    failCallback: failCallback,
    handleStoreError: handleStoreError
});

// require the users controller
let usersController = require('../controllers/users');

// GET /login - render the login view
router.get('/login', (req, res, next)=>{
  usersController.DisplayLogin(req, res);
  // POST /login - process the login attempt
}).post('/login', bruteforce.prevent, usersController.ProcessLogin());

// GET /register - render the registration view
router.get('/register', (req, res, next)=>{
   usersController.DisplayRegistration(req, res);
}).post('/register',  (req, res, next)=>{
  // POST / register - process the registration submission
  usersController.ProcessRegistration(req, res);
});

// GET /logout - process the logout request
router.get('/logout', (req, res, next)=>{
  usersController.ProcessLogout(req, res);
});

module.exports = router;
