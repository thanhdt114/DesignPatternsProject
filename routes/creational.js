const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'creational.html'));
});

router.get('/factory-method', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'creationals', 'factory-method.html'));
});

router.get('/abstract-factory', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'creationals', 'abstract-factory.html'));
});

router.get('/builder', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'creationals', 'builder.html'));
});

router.get('/prototype', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'creationals', 'prototype.html'));
});

router.get('/singleton', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'creationals', 'singleton.html'));
});

// LOAD IMAGE
router.get('/image/class-diagram-factory-method', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'images', 'creationals',  'class-diagram-factory-method.png'));
});

router.get('/image/class-diagram-abstract-factory', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'images', 'creationals',  'class-diagram-abstract-factory.png'));
});

module.exports = router;
