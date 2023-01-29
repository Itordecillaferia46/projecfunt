const express = require("express");
const pictureSchema = require("../models/picture");

// Rutas para colección "imagenes"

const router = express.Router();

// create user
router.post("/pictures", (req, res) => {
  const picture = pictureSchema(req.body);
  picture
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/pictures", (req, res) => {
  pictureSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/pictures/:id", (req, res) => {
  const { id } = req.params;
  pictureSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/pictures/:id", (req, res) => {
  const { id } = req.params;
  pictureSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/pictures/:id", (req, res) => {
  const { id } = req.params;
  const { format, extend, url } = req.body;
  pictureSchema
    .updateOne({ _id: id }, { $set: { format, extend, url } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;