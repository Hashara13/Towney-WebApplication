const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();
const ScriptModel=require('../models/script')


router.post('/create/new', (req, res) => {
  Production_userModel.create(req.body)
    .then((user) => res.status(201).send(user))
    .catch((err) => {
      console.error('Error creating user:', err);
      res.status(500).send(err);
    });
});

router.get('/network', async (req, res) => {
  try {
    const { name, state, performRole } = req.query;
    const query = {};

    if (name) query.name = { $regex: name, $options: 'i' };
    if (state) query.state = state;
    if (performRole) query.performRole = performRole;

    const crewMembers = await Production_userModel.find(query).populate('name').exec();
    res.status(200).json(crewMembers);
  } catch (err) {
    console.error('Error fetching crew members:', err);
    res.status(500).json({ error: 'An error occurred while fetching crew members.' });
  }
});


router.get('/network/get/:id', async (req, res) => {
  try {
    const crewId = req.params.id;
    const crewProfile = await Production_userModel.findById(crewId);
    
    if (!crewProfile) {
      return res.status(404).json({ error: 'Crew member not found' });
    }

    const crewRates = await Rates.find({ productionUser: crewId });

    return res.status(200).json({ crewProfile, crewRates });
  } catch (err) {
    console.error('Error fetching crew member details:', err);
    return res.status(500).json({ error: 'Failed to fetch crew member details' });
  }
});

router.put('/network/update/:id', async (req, res) => {
  try {
    const crewId = req.params.id;
    const updatedCrew = await Production_userModel.findByIdAndUpdate(crewId, req.body, { new: true });
    res.status(200).send({ status: 'update success', updatedCrew });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Failed to update crew member' });
  }
});

router.delete('/network/delete/:id', async (req, res) => {
  try {
    const crewId = req.params.id;
    await Production_userModel.findByIdAndDelete(crewId);
    res.status(200).send({ status: 'delete success' });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Failed to delete crew member' });
  }
});

module.exports = router;
