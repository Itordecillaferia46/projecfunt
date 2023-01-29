const express = require("express");
const crucigramaSchema = require("../models/crucigrama");

const router = express.Router();

// create user
router.post("/crucigramas", (req, res) => {
  const crucigrama = crucigramaSchema(req.body);
  crucigrama
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/crucigramas", (req, res) => {
    crucigramaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/crucigramas/:id", (req, res) => {
  const { id } = req.params;
  crucigramaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/crucigramas/:id", (req, res) => {
  const { id } = req.params;
  crucigramaSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/crucigramas/:id", (req, res) => {
  const { id } = req.params;
  const { pistas, P_H, P_V } = req.body;
  crucigramaSchema
    .updateOne({ _id: id }, { $set: {  pistas, P_H, P_V } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;