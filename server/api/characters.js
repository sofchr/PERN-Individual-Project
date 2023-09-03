const express = require('express');
const router = express.Router();

const { getAllCharacters, getCharacterById, createCharacter } = require('../db/helpers/characters');

// GET - /api/characters, get all characters
router.get('/', async (req, res, next) => {
    try {
        const characters = await getAllCharacters();
        res.send(characters);
    } catch (error) {
        next(error);
    }
});

//GET individual character
router.get('/:characterId', async (req, res, next) => {
    try {
        const character = await getCharacterById(req.params.characterId);
        res.send(character);
    } catch (error) {
        next(error);
    }
});

//POST new character
router.post('/', async (req, res, next) => {
    try {
        const character = await createCharacter(req.body);
        res.send(character);
    } catch (error) {
        next(error);
    }
});

module.exports = router;