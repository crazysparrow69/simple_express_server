const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|index(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/dog(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'dog.html'));
});

router.get('/cat(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'cat.html'));
});

module.exports = router;