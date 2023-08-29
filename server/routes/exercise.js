const express = require('express');

const router = express.Router();

let records = [];

router.get('/', (req, res) => {
  res.send(JSON.stringify(records));
});

router.post('/', (req, res) => {
  records.push(JSON.parse(req.body));
  res.send(JSON.stringify(records));
});

module.exports = router;
