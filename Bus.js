
const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String
});

module.exports = mongoose.model('Bus', busSchema);
