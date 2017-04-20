let mongoose = require('mongoose');

// define the disease model
let disease = require('../models/diseases');

// Read and display the Disease List
module.exports.ReadDiseaseList = (req, res) => {
  // find all diseases in the diseases collection
  
  disease.find((err, diseases) => {
    if (err) {
      return console.error(err);
    }
    else {
      //.status(200).json(diseases).
      res.render('diseases/index', {
        title: 'Mitochonrial Diseases',
        diseases: diseases,
        displayName: req.user ? req.user.displayName : '',
        userHigher: req.user ? req.user.level : ''
    });
    }
  });

}


// displays the Details page - allowing users to add a new Disease
module.exports.DisplayAdd = (req, res) => {
  res.render('diseases/details', {
    title: "Add a mitochondrial disease",
    diseases: '',
    displayName: req.user.displayName
  });
}

// Create a new disease and insert it into the db
module.exports.CreateDisease = (req, res) => {
  let newDisease = disease({
    "name": req.body.name,
    "type": req.body.type,
    "description": req.body.description,
    "symptoms": req.body.symptoms,
    "references": req.body.references,
    "tags": req.body.tags
  });

  disease.create(newDisease, (err, disease) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/diseases');
    }
  });
}

// Displays the Details page to Update a Disease
// find the disease by id and populate the form
module.exports.DisplayEdit = (req, res) => {
  try {
    // get a reference to the id from the url
    let id = mongoose.Types.ObjectId.createFromHexString(req.params.id);

    // find one disease by its id
    disease.findById(id, (err, diseases) => {
      if (err) {
        console.log(err);
        res.end(error);
      } else {

        // show the disease details view
        res.render('diseases/details', {
          title: 'Disease Details',
          diseases: diseases,
          displayName:  req.user ? req.user.displayName : ''
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.redirect('/errors/404');
  }
}

// Update an existing Disease in the diseases collection
module.exports.UpdateDisease = (req, res) => {
  // get a reference to the id from the url
  let id = req.params.id;

  let updatedDisease = disease({
    "_id": id,
    "name": req.body.name,
    "type": req.body.type,
    "description": req.body.description,
    "symptoms": req.body.symptoms,
    "references": req.body.references,
    "tags": req.body.tags
  });

  disease.update({ _id: id }, updatedDisease, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the disease List
      res.redirect('/diseases');
    }
  });
}

// Deletes a disease from the diseases collection
module.exports.DeleteDisease = (req, res) => {
  // get a reference to the id from the url
  let id = req.params.id;

  disease.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the diseases list
      res.redirect('/diseases');
    }
  });
}
