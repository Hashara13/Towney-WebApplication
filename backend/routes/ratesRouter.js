const express = require('express');
const mongoose = require('mongoose'); 
const router = express.Router();
const Rates = require('../models/rates');

router.post('/create/rates', (req, res) => {
    Rates.create(req.body)
        .then((rate) => res.status(201).send(rate))
        .catch((err) => {
            console.error('Error adding rates:', err);
            res.status(500).send(err);
        });
});

router.get('/network/rates/:id', async (req, res) => {
  try {
      const rateId = req.params.id;
      console.log('Fetching rate with ID:', rateId);

      if (!mongoose.Types.ObjectId.isValid(rateId)) {
          return res.status(400).send({ status: 'Invalid Rate ID' });
      }

      const rate = await Rates.findById(rateId);
      if (!rate) {
          return res.status(404).send({ status: 'Rate not found' });
      }

      res.status(200).send({ status: 'fetch success', rate });
  } catch (err) {
      console.error('Error fetching crew rates:', err); 
      res.status(500).send({ error: 'Failed to fetch crew rates', details: err.message });
  }
});

module.exports = router;
