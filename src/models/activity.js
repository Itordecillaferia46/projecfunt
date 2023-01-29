const mongoose = require("mongoose");

const activitySchema = mongoose.Schema({
  enunciado: {
    type: String,
    required: true,
  },

  
});

module.exports = mongoose.model('Activity', activitySchema);