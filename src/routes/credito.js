const express = require("express");
const creditoSchema = require("../models/credito");

const router = express.Router();

// create user
router.post("/creditos", (req, res) => {
  const credito = creditoSchema(req.body);
  credito
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/creditos", (req, res) => {
    creditoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/creditos/:id", (req, res) => {
  const { id } = req.params;
  creditoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/creditos/:id", (req, res) => {
  const { id } = req.params;
  creditoSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/creditos/:id", (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  creditoSchema
    .updateOne({ _id: id }, { $set: { nombre } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;