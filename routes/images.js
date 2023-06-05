const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'images', 'circle.png'));
});

router.get('/circle', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'images',  'circle.png'));
});

router.get('/square', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'images',  'square.png'));
  });

module.exports = router;
