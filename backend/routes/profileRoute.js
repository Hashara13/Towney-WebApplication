const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const Profile = require("../models/myProfile");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', 'uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.fieldname === "photo") {
      cb(null, true);
    } else {
      cb(new Error("Unexpected field"));
    }
  }
}).single("photo");

router.post("/create/upload", (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json({ error: err.message });
    } else if (err) {
      return res.status(500).json({ error: err.message });
    }

    console.log("Request body:", req.body);
    console.log("Request file:", req.file);

    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }

    const newPhoto = new Profile({
      filename: req.file.filename,
      path: path.join('uploads', req.file.filename),
    });

    newPhoto.save()
      .then(savedPhoto => res.status(201).json(savedPhoto))
      .catch(error => res.status(400).json({ message: error.message }));
  });
});

router.get("/network/user", async (req, res) => {
  try {
    const photos = await Profile.find();
    res.status(200).json(photos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/network/user/:id", async (req, res) => {
  try {
    const photoId = req.params.id;
    const photo = await Profile.findById(photoId);
    if (!photo) {
      return res.status(404).send("Photo not found");
    }
    res.status(200).json({ status: "fetch success", photo });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;