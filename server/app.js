// modules required for the project
let express = require('express');
let path = require('path'); // part of node.js core
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');


// modules for authentication
let session = require('express-session');
let passport = require('passport');
let passportlocal = require('passport-local');
let LocalStrategy = passportlocal.Strategy;
let flash = require('connect-flash'); // displays errors / login messages


// import "mongoose" - required for DB Access
let mongoose = require('mongoose');
// URI
let config = require('./config/db');

mongoose.connect(process.env.URI || config.URI);

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("Conneced to MongoDB...");
});

// define routers
let index = require('./routes/index'); // top level routes
let diseases = require('./routes/diseases'); // routes for diseases
let users = require('./routes/users'); // routes for users and auth

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, '../node_modules')));


// setup session
app.use(session({
  secret: "SessionGreatHollow",
  saveUninitialized: true,
  resave: true
}));

// initialize passport and flash
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// route redirects
app.use('/', index); // top level links
app.use('/diseases', diseases); // diseases links - start with /diseases
app.use('/users', users); // users links - start with /users

// Passport User Configuration
let UserModel = require('./models/users');
let User = UserModel.User; // alias for the User Model - User object
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/////////////////////////////////////////////////////
//let diseases = require('../models/diseases');
let diseaseC = require('./models/diseases');
let jsonDiseases = require('../diseaselist.json');
console.log("check db.");
diseaseC.count(function (err, count) {
  if (count < 3) {
    console.dir(err);
    console.dir(count);
    if (count == 0) {
      console.log("No Found Records.");
    }
    else {
      console.log("Found Records : " + count);
    }

    diseaseC.insertMany(jsonDiseases, function (err, result) {
      if (err) {
        // handle error
      } else {
        // handle success
      }
    });

  }
});
//////////////////////////////////////////////////////

// Handle 404 Errors
app.use(function (req, res) {
  res.status(400);
  res.render('errors/404', {
    title: '404: File Not Found'
  });
});

// Handle 500 Errors
app.use(function (error, req, res, next) {
  res.status(500);
  res.render('errors/500', {
    title: '500: Internal Server Error',
    error: error
  });
});

module.exports = app;
