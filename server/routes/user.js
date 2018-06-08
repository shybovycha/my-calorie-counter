const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, nutrition!');
});

router.post('/signup', (req, res) => {
  res.status(201).end(); // created
});

router.post('/signin', (req, res) => {
  res.status(401).end(); // not authorized
});

module.exports = router;
