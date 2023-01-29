const mongoose = require("mongoose");

const resourceSchema = mongoose.Schema({
  format: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true
  },
  resolution: {
    type: String,
    required: true

  },
  copyright: {
    type: String,
    required: true

  },
  
});

module.exports = mongoose.model('Resource', resourceSchema);