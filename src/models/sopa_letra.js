const mongoose = require("mongoose");

const sopa_letraSchema = mongoose.Schema({
  palabras: {
    type: Array,
    required: true,
  },
  respuestas: {
    type: Array,
    required: true
  },

  
});

module.exports = mongoose.model('Sopa_letra', sopa_letraSchema);