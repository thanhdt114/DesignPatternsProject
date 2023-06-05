const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'structural.html'));
});

router.get('/adapter', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'structurals', 'adapter.html'));
});

router.get('/bridge', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'structurals', 'bridge.html'));
});

router.get('/composite', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'structurals', 'composite.html'));
});

router.get('/decorator', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'structurals', 'decorator.html'));
});

router.get('/facade', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'structurals', 'facade.html'));
});

router.get('/flyweight', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'structurals', 'flyweight.html'));
});

router.get('/proxy', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'structurals', 'proxy.html'));
});



module.exports = router;
