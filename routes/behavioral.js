const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'behavioral.html'));
});

router.get('/chain-of-responsibility', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'behaviorals', 'chain-of-responsibility.html'));
});

router.get('/command', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'behaviorals', 'command.html'));
});

router.get('/iterator', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'behaviorals', 'iterator.html'));
});

router.get('/mediator', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'behaviorals', 'mediator.html'));
});

router.get('/memento', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'behaviorals', 'memento.html'));
});

router.get('/observer', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'behaviorals', 'observer.html'));
});

router.get('/state', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'behaviorals', 'state.html'));
});

router.get('/strategy', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'behaviorals', 'strategy.html'));
});

router.get('/template-method', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'behaviorals', 'template-method.html'));
});

router.get('/visitor', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'behaviorals', 'visitor.html'));
});

module.exports = router;
