const express = require('express');

const router = express.Router();

let information = {
  gender: 'MALE',
  exerciseLevel: 1,
  height: 160,
  dateOfBirth: '01/01/2000',
};

router.get('/', (req, res) => {
  res.json(information);
});

router.post('/', (req, res) => {
  information = req.body;
  res.json(information);
});

module.exports = router;
