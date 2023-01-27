const mongoose = require("mongoose");

const contentSchema = mongoose.Schema({
  concept: {
    type: String,
    required: true,
  },
  characteristic: {
    type: String,
    required: true
  },
  examples: {
    type: String,
    required: true

  },
  
});

module.exports = mongoose.model('Content', contentSchema);