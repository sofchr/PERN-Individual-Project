const express = require('express');
const router = express.Router();

const { getAllPosts, getPostById, createPost, deletePost } = require('../db/helpers/posts');

// GET - /api/posts, get all posts
router.get('/', async (req, res, next) => {
    try {
        const posts = await getAllPosts();
        res.send(posts);
    } catch (error) {
        next(error);
    }
});

//GET individual post
router.get('/:postId', async (req, res, next) => {
    try {
        const post = await getPostById(req.params.postId);
        res.send(post);
    } catch (error) {
        next(error);
    }
});

//POST new post
router.post('/', async (req, res, next) => {
    try {
        const post = await createPost(req.body);
        res.send(post);
    } catch (error) {
        next(error);
    }
});

//DELETE individual post
router.delete('/:postId', async (req, res, next) => {
    try {
        const post = await deletePost(req.params.postId);
        res.send(post);
    } catch (error) {
        next(error);
    }
});

router.patch('/:postId', async (req, res, next) => {
    try {
        const post = await getPostById(req.params.postId);
        res.send(post);
    } catch (error) {
        next(error);
    }
});

module.exports = router;