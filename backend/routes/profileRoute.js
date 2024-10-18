const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const router = express.Router();
const Profile = require("../models/myProfile");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Dat.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/create/upload", upload.single("photo"), async (req, res) => {
  if (!file) {
    return res.status(400).send("No file found");
  }
  const newPhoto = new Profile({
    filename: req.file.filename,
    path: req.file.path,
  });
  try {
    await newPhoto.save();
    res.send(201).json(newPhoto);
  } catch (error) {
    res.send(400).json({ message: error.message });
  }
});

router.get("/network/user", async (req, res) => {
  try {
    const photos = await Profile.find();
    res.status(200).json(photos);
  } catch (error) {
    res.send(400).json({ message: error.message });
  }
});

router.get("/network/user/:id", async (req, res) => {
  try {
    const photoId = req.params.id;
    console / log("Requested photo found", photoId);
    const photos = await Profile.findById(photoId);
    if (!photos) {
      res.send(400).send("Cant Found Photo");
    }
    res.status(200).send({ status: "fetch success", photos });
  } catch (error) {
    res.send(400).json({ message: error.message });
  }
});

module.exports=router;
