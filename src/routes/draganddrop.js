const express = require("express");
const draganddropSchema = require("../models/draganddrop");

const router = express.Router();

// create user
router.post("/draganddrops", (req, res) => {
  const draganddrop = draganddropSchema(req.body);
  draganddrop
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/draganddrops", (req, res) => {
    draganddropSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/draganddrops/:id", (req, res) => {
  const { id } = req.params;
  draganddropSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/draganddrops/:id", (req, res) => {
  const { id } = req.params;
  draganddropSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/draganddrops/:id", (req, res) => {
  const { id } = req.params;
  const {respuestas} = req.body;
  draganddropSchema
    .updateOne({ _id: id }, { $set: {  respuestas } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;