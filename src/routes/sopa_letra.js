const express = require("express");
const sopa_letraSchema = require("../models/sopa_letra");

const router = express.Router();

// create user
router.post("/sopa_letras", (req, res) => {
  const sopa_letra = sopa_letraSchema(req.body);
  sopa_letra
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/sopa_letras", (req, res) => {
    sopa_letraSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/sopa_letras/:id", (req, res) => {
  const { id } = req.params;
  sopa_letraSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/sopa_letras/:id", (req, res) => {
  const { id } = req.params;
  sopa_letraSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/sopa_letras/:id", (req, res) => {
  const { id } = req.params;
  const {palabras, respuestas} = req.body;
  sopa_letraSchema
    .updateOne({ _id: id }, { $set: { palabras, respuestas } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;