const express = require("express");
const contentSchema = require("../models/content");

const router = express.Router();

// create user
router.post("/contents", (req, res) => {
  const content = contentSchema(req.body);
  content
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/contents", (req, res) => {
  contentSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/contents/:id", (req, res) => {
  const { id } = req.params;
  contentSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/contents/:id", (req, res) => {
  const { id } = req.params;
  contentSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/contents/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  contentSchema
    .updateOne({ _id: id }, { $set: { concept, characteristic, examples } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;

//CRUD (crear, leer, actualizar, borrar)
//create 
//Read
//Update
//Delete