const express = require("express");
const videoSchema = require("../models/video");

// Rutas para colección "videos"

const router = express.Router();

// create user
router.post("/videos", (req, res) => {
  const video = videoSchema(req.body);
  video
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/videos", (req, res) => {
    videoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/videos/:id", (req, res) => {
  const { id } = req.params;
  videoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/videos/:id", (req, res) => {
  const { id } = req.params;
  videoSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/videos/:id", (req, res) => {
  const { id } = req.params;
  const { format, audio_quality, url } = req.body;
  videoSchema
    .updateOne({ _id: id }, { $set: { format, audio_quality, url } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;