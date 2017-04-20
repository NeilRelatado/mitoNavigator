// Display the Home Page
module.exports.DisplayHome = (req, res) => {
  res.render('content/index', {
    title: 'Home',
    diseases: '',
    displayName: req.user ? req.user.displayName : ''
   });
}

// Displays the Contact Page
module.exports.DisplayContact = (req, res) => {
  res.render('content/contact', {
    title: 'Contact',
    diseases: '',
    displayName: req.user ? req.user.displayName : ''
   });
}

// Displays the Contact Page
module.exports.DisplayGenetics = (req, res) => {
  res.render('content/genetics', {
    title: 'Genetics',
    diseases: '',
    displayName: req.user ? req.user.displayName : ''
   });
}
// Displays the Contact Page
module.exports.DisplayMitoDisease = (req, res) => {
  res.render('content/mitoDisease', {
    title: 'Mitochondrial Disease',
    diseases: '',
    displayName: req.user ? req.user.displayName : ''
   });
}
// Displays the Contact Page
module.exports.DisplayPolicy = (req, res) => {
  res.render('content/policy', {
    title: 'Privacy Policy/Terms and Conditions',
    diseases: '',
    displayName: req.user ? req.user.displayName : ''
   });
}
// Displays the Contact Page 
/*
module.exports.DisplayResources = (req, res) => {
  res.render('content/resouces', {
    title: 'Resources',
    diseases: '',
    displayName: req.user ? req.user.displayName : ''
   });
}
*/
// Displays the Contact Page
module.exports.DisplayWhatIs = (req, res) => {
  res.render('content/whatIs', {
    title: 'What Are Mitochondria?',
    diseases: '',
    displayName: req.user ? req.user.displayName : ''
   });
}
// Displays the Contact Page
module.exports.DisplayWhoAreWe = (req, res) => {
  res.render('content/whoAreWe', {
    title: 'Who Is MitoCanada?',
    diseases: '',
    displayName: req.user ? req.user.displayName : ''
   });
}