const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
  _id: String,  // Name of the collection to which the counter applies
  seq: Number   // The last used id value
});

module.exports = mongoose.model('Counter', counterSchema);
;