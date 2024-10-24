const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();
const ScriptModel=require('../models/script')


router.post('/script/new', (req, res) => {
    ScriptModel.create(req.body)
    .then((user) => res.status(201).send(user))
    .catch((err) => {
      console.error('Error creating script:', err);
      res.status(500).send(err);
    });
});

router.get('/scripts', async (req, res) => {
    try {
      const { genre, status } = req.query;
      const query = {};
  
      if (genre) query.genre = { $regex: genre, $options: 'i' };
      if (status) query.status = status;
  
      const scripts = await ScriptModel.find(query)
        .populate('postedBy', 'name') 
        .exec();
        
      res.status(200).json(scripts);
    } catch (err) {
      console.error('Error fetching scripts:', err);
      res.status(500).json({ error: 'An error occurred while fetching scripts.' });
    }
  });


router.get('/scripts/get/:id', async (req, res) => {
    try {
        const scriptId = req.params.id;
        const scriptsList = await ScriptModel.findById(scriptId);
        if (!scriptsList) {
          return res.status(404).send("scriptsList not found");
        }
        res.status(200).json({ status: "fetch success", scriptsList });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    });

router.put('/scripts/update/:id', async (req, res) => {
  try {
    const scriptId = req.params.id;
    const updatedScript = await ScriptModel.findByIdAndUpdate(scriptId, req.body, { new: true });
    res.status(200).send({ status: 'update success', updatedScript });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Failed to update scripts' });
  }
});

router.delete('/scripts/delete/:id', async (req, res) => {
  try {
    const scriptId = req.params.id;
    await ScriptModel.findByIdAndDelete(scriptId);
    res.status(200).send({ status: 'delete success' });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Failed to delete script' });
  }
});

module.exports = router;
