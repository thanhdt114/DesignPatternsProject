const express = require('express');
const router = express.Router();
const homeRoutes = require('./home')
const aboutRoutes = require('./about')

const creationalRoutes = require('./creational')

const structuralRoutes = require('./structural')

const behavioralRoutes = require('./behavioral')

const imageRoutes = require('./images')

const path = require('path');

// Route chính
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'circle.png'));
});

router.use('/home', homeRoutes);
router.use('/creationals', creationalRoutes);
router.use('/structurals', structuralRoutes);
router.use('/behaviorals', behavioralRoutes);
router.use('/about', aboutRoutes);
router.use('/images', imageRoutes);

module.exports = router;
