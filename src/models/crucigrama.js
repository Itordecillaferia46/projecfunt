const mongoose = require("mongoose");

const crucigramaSchema = mongoose.Schema({
  pistas: {
    type: String,
    required: true,
  },
  P_H: {
    type: String,
    required: true
  },
  P_V: {
    type: String,
    required: true

  },
  
});

module.exports = mongoose.model('Crucigrama', crucigramaSchema);