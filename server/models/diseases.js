let mongoose = require('mongoose');

// create a model class
let diseasesSchema = mongoose.Schema({
    name: String,
    type: String,
    description: String,
    symptoms: String,
    refrences: String
},
{
  collection: "diseases"
});

module.exports = mongoose.model('diseases', diseasesSchema);
