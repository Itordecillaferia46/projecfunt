const express = require("express");
const activitySchema = require("../models/activity");

// Rutas para colección "actividades"

const router = express.Router();

// create user
router.post("/activities", (req, res) => {
  const activity = activitySchema(req.body);
  activity
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/activities", (req, res) => {
    activitySchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/activities/:id", (req, res) => {
  const { id } = req.params;
  activitySchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/activities/:id", (req, res) => {
  const { id } = req.params;
  activitySchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/activities/:id", (req, res) => {
  const { id } = req.params;
  const { enunciado } = req.body;
  activitySchema
    .updateOne({ _id: id }, { $set: { enunciado } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;