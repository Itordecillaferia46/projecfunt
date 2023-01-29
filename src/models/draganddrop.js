const mongoose = require("mongoose");

const draganddropSchema = mongoose.Schema({
  respuestas: {
    type: String,
    required: true,
  },
  
  
});

module.exports = mongoose.model('Draganddrop', draganddropSchema);