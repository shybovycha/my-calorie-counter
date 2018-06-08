const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json([]);
});

router.post('/', (req, res) => {
  res.status(201).end();
});

module.exports = router;
