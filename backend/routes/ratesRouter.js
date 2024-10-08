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
  
  module.exports = router;