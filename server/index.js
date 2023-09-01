const express = require('express');
const router = express.Router()

router.get('/health', (req, res, next) => {
    res.send('OK')
});

//router for all characters
router.use('/characters', require('./dogs'))