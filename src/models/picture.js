const mongoose = require("mongoose");

const pictureSchema = mongoose.Schema({
  format: {
    type: String,
    required: true,
  },
  extend: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true

  },

  
});

module.exports = mongoose.model('Picture', pictureSchema);