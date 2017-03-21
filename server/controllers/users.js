let mongoose = require('mongoose');
let passport = require('passport');

// define the user model
let UserModel = require('../models/users');
let User = UserModel.User; // alias for User Model - User object

module.exports.DisplayLogin = (req, res) => {
// check to see if the user is not already logged in
  if(!req.user) {
    // render the login page
    res.render('auth/login', {
      title: "Login",
      diseases: '',
      messages: req.flash('error'),
      displayName: req.user ? req.user.displayName : ''
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
  if(!req.user) {
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
  User.register(
    new User({
      username: req.body.username,
      //password: req.body.password,
      email: req.body.email,
      displayName: req.body.displayName
    }),
    req.body.password,
    (err) => {
      if(err) {
        console.log('Error inserting new user');
        if(err.name == "UserExistsError") {
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
      return passport.authenticate('local')(req, res, ()=>{
        res.redirect('/diseases');
      });
    });
}

// Process the Logout request
module.exports.ProcessLogout = (req, res) => {
  req.logout();
  res.redirect('/'); // redirect to the home page
}

  // create a function to check if the user is authenticated
module.exports.RequireAuth = (req, res, next) => {
  // check if the user is logged in
  if(!req.isAuthenticated()) {
    return res.redirect('/users/login');
  }
  next();
}

module.exports.RequireAdminAuth = (req, res, next) => {
  if(!req.isAuthenticated()) {
    return res.redirect('/users/login');
  }
  else if (req.user.level != "Admin"){
     return res.redirect('/');
  }
  next();
}
