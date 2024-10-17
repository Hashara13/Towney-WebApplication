const express = require('express');
const router = express.Router();
const Rates=require('../models/rates')


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
      const rate = await Rates.findById(rateId).populate('productionUser');
      if (!rate) {
        return res.status(404).send({ status: 'Rate not found' });
      }
  
      res.status(201).send({ status: 'fetch success', rate });
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: 'Failed to fetch crew rates' });
    }
  });
  
  module.exports = router;