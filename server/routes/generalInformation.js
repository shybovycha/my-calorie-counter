const express = require('express');

const router = express.Router();

let information = {
  gender: 'MALE',
  exerciseLevel: 1,
  height: 160,
  weight: 80,
};

router.get('/', (req, res) => {
  res.send(JSON.stringify(information));
});

router.post('/', (req, res) => {
  information = JSON.parse(req.body);
  res.send(JSON.stringify(information));
});

module.exports = router;
