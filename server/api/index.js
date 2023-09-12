const express = require('express');
const router = express.Router();


// ROUTER: /api/characters
router.use('/characters', require('./characters'));

// ROUTER: /api/posts
router.use('/posts', require('./posts'));

// ROUTER: /api/users
router.use('/users', require('./users'));

//ROUTER: 
router.use('/auth', require('./auth'))

module.exports = router;    