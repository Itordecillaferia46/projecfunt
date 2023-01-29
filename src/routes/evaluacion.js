const express = require("express");
const evaluacionSchema = require("../models/evaluacion");

// Rutas para colección "actividades"

const router = express.Router();

// create user
router.post("/evaluaciones", (req, res) => {
  const evaluacion = evaluacionSchema(req.body);
  evaluacion
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/evaluaciones", (req, res) => {
    evaluacionSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/evaluaciones/:id", (req, res) => {
  const { id } = req.params;
  evaluacionSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/evaluaciones/:id", (req, res) => {
  const { id } = req.params;
  evaluacionSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/evaluaciones/:id", (req, res) => {
  const { id } = req.params;
  const { preguntas, respuestas, calificacion } = req.body;
  evaluacionSchema
    .updateOne({ _id: id }, { $set: { preguntas, respuestas, calificacion } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;