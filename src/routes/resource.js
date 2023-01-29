const express = require("express");
const resourceSchema = require("../models/resource");

const router = express.Router();

//Rutas de colección "recursos"

// create resources
router.post("/resources", (req, res) => {
  const resource = resourceSchema(req.body);
  resource
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/resources", (req, res) => {
    resourceSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/resources/:id", (req, res) => {
  const { id } = req.params;
  resourceSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/resources/:id", (req, res) => {
  const { id } = req.params;
  const { format, url, resolution, copyright} = req.body;
  resourceSchema
    .updateOne({ _id: id }, { $set: { format, url, resolution, copyright } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;