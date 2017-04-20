let mongoose = require('mongoose');
let passport = require('passport');

let mailerController = require('./mailing');

// define the user model
let UserModel = require('../models/users');
let User = UserModel.User; // alias for User Model - User object

module.exports.DisplayLogin = (req, res) => {
  // check to see if the user is not already logged in

  if (!req.user) {
    // render the login page
    console.log(req.body);
    res.render('auth/login', {
      title: "Login",
      diseases: '',
      messages: req.flash('error'),
      displayName: req.user ? req.user.displayName : '',
    });
    return;
  } else {
    return res.redirect('/diseases'); // redirect to diseases list
  }
}

// Processes the Login Request
module.exports.ProcessLogin = () => {
  return passport.authenticate('local', {
    successRedirect: '/diseases',
    failureRedirect: '/users/login',
    failureFlash: true
  })
}

// Displays registration page
module.exports.DisplayRegistration = (req, res) => {
  // check to see if the user is not already logged in
  if (!req.user) {
    // render the registration page
    res.render('auth/register', {
      title: "Register",
      diseases: '',
      messages: req.flash('registerMessage'),
      displayName: req.user ? req.user.displayName : ''
    });
    return;
  } else {
    return res.redirect('/diseases'); // redirect to diseases list
  }
}

// Process the registration page
module.exports.ProcessRegistration = (req, res) => {
  if (captcha(req, res, function (success) {
    if (success) {
      User.register(
        new User({
          username: req.body.username,
          //password: req.body.password,
          email: req.body.email,
          displayName: req.body.displayName
        }),
        req.body.password,
        (err) => {
          if (err) {
            console.log('Error inserting new user');
            if (err.name == "UserExistsError") {
              req.flash('registerMessage', 'Registration Error: User Already Exists');
            }
            return res.render('auth/register', {
              title: "Register",
              diseases: '',
              messages: req.flash('registerMessage'),
              displayName: req.user ? req.user.displayName : ''
            });
          }
          // if registration is successful
          return passport.authenticate('local')(req, res, () => {
            res.redirect('/diseases');
          });
        });
    }
    else {
       req.flash('registerMessage', 'Registration Error: Caption Failed');
    }
  }));
}


// Process the Logout request
module.exports.ProcessLogout = (req, res) => {
  req.logout();
  res.redirect('/'); // redirect to the home page
}

// create a function to check if the user is authenticated
module.exports.RequireAuth = (req, res, next) => {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect('/users/login');
  }
  next();
}

module.exports.RequireAdminAuth = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/users/login');
  }
  else if (req.user.level != "Admin") {
    return res.redirect('/');
  }
  next();
}

/////////////////////////////////////////////////////////////////////////////////////////////////
let https = require('https');

function verifyRecaptcha(key, callback) {
  sKeyCaptcha = '6LdWqB0UAAAAANM0cFJ8_PgruX3q9EBNJus0p2Xa';
  https.get("https://www.google.com/recaptcha/api/siteverify?secret=" + sKeyCaptcha + "&response=" + key, function (res) {
    var data = "";
    res.on('data', function (chunk) {
      data += chunk.toString();
    });
    res.on('end', function () {
      try {
        var parsedData = JSON.parse(data);
        console.log(parsedData + "tryy");
        callback(parsedData.success);
      } catch (e) {
        callback(false);
      }
    });
  });
}



function captcha(req, res, callback) {
  verifyRecaptcha(req.body["g-recaptcha-response"], function (success) {
    if (success) {
      callback(true);
      //res.end("Success!");
      // TODO: do registration using params in req.body
    } else {
      callback(false);
      //res.end("Captcha failed, sorry.");
      //res.json({ success: success, error: "Captcha failed" });
      // TODO: take them back to the previous page
      // and for the love of everyone, restore their inputs
    }
  });

};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////