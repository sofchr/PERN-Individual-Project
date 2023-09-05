const express = require('express');
const router = express.Router();

const { getAllUsers, getUserById, createUser } = require('../db/helpers/users');

// GET - /api/users, get all users
router.get('/', async (req, res, next) => {
    try {
        const users = await getAllUsers();
        res.send(users);
    } catch (error) {
        next(error);
    }
});

//GET individual user
router.get('/:userId', async (req, res, next) => {
    try {
        const user = await getUserById(req.params.userId);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

//POST new user
router.post('/', async (req, res, next) => {
    try {
        const user = await createUser(req.body);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

module.exports = router;