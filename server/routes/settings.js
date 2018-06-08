const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, nutrition!');
});

router.post('/', (req, res) => {
  res.status(201).end();
});

router.put('/', (req, res) => {
  res.status(201).end();
});

module.exports = router;
