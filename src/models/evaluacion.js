const mongoose = require("mongoose");

const evaluacionSchema = mongoose.Schema({
  preguntas: {
    type: Array,
    required: true,
  },
  respuestas: {
    type: Array,
    required: true
  },
  calificacion: {
    type: Number,
    required: true

  },
  
});

module.exports = mongoose.model('Evaluacion', evaluacionSchema);