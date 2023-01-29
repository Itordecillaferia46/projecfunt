const mongoose = require("mongoose");

const videoSchema = mongoose.Schema({
  format: {
    type: String,
    required: true,
  },
  audio_quality: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true

  },

  
});

module.exports = mongoose.model('Video', videoSchema);