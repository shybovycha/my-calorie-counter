const express = require('express');

const router = express.Router();

let records = [];

router.get('/', (req, res) => {
  res.send(records);
});

router.post('/', (req, res) => {
  records.push(req.body);
  res.send(records);
});

module.exports = router;
