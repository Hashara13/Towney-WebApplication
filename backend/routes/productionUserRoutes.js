const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();
const Production_userModel = require('../models/production_user');
const Rates = require('../models/rates'); //c


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

// router.get('/network/get/:id', async (req, res) => {
//   try {
//     const crewId = req.params.id;
//     if (!mongoose.Types.ObjectId.isValid(crewId)) {
//       return res.status(400).send({ status: 'Invalid Production User ID' });
//     }
//     const crew = await Production_userModel.findById(crewId).populate('rates');
//     if (!crew) {
//       return res.status(404).send({ status: 'Production user not found' });
//     }

//     res.status(201).send({ status: 'fetch success', crew });
//   } catch (err) {
//     console.log(err);
//     res.status(500).send({ error: 'Failed to fetch crew member' });
//   }
// });

router.get('/network/get/:id', async (req, res) => {
  try {
   
    const crew = await Production_userModel.findById(req.params.id)
    const rate = await Rates.find({production_user:req.params.id});

   res.json({crew,rate});

    res.status(201).send({ status: 'fetch success', crew });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Failed to fetch crew member' });
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
