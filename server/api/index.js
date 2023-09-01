const express = require('express');
const router = express.Router();

// GET /api/health
router.get('/health', (req, res, next) => {
    res.send('OK');
});

// ROUTER: /api/characters
router.use('/characters', require('./characters'));

// ROUTER: /api/posts
router.use('/posts', require('./posts'));

module.exports = router;    