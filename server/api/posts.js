const express = require('express');
const router = express.Router();

const { getAllPosts } = require('../db/helpers/posts');

// GET - /api/posts, get all posts
router.get('/', async (req, res, next) => {
    try {
        const posts = await getAllPosts();
        res.send(posts);
    } catch (error) {
        next(error);
    }
});

module.exports = router;