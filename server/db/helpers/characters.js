const client = require("../client")

const createCharacter = async ({ name, human, description, posterid }) => {
    try {
        const {
            rows: [character],
        } = await client.query(
            `
                INSERT INTO characters( name, human, description, posterid )
                VALUES($1, $2, $3, $4)
                RETURNING *;
            `,
            [name, human, description, posterid]
        )
        return character
    } catch (error) {
        throw error
    }
}

const getAllCharacters = async () => {
    try {
        const { rows }
            = await client.query(`
            SELECT *
            FROM characters;
        `)
        return rows
    } catch (error) {
        throw error
    }
}


const getCharacterById = async (characterId) => {
    try {
        const {
            rows: [characters]
        } = await client.query(
            `
                SELECT *
                FROM characters
                WHERE "characterId" =${characterId};
            `
        )
        return characters
    } catch (error) {
        throw error
    }
}

const deleteCharacter = async (characterId) => {
    try {
        const {
            rows: [characters]
        } = await client.query(
            `
            DELETE FROM characters
            WHERE "characterId" =${characterId};
            `
        )
        return characters
    } catch (error) {
        throw error
    }
}

const editCharacter = async (characterId, body) => {
    try {
        const {
            rows: [characters]
        } = await client.query(
            `
                UPDATE characters
                SET name = '${body.name}',
                human = '${body.human}',
                description = '${body.description}'
                WHERE "characterId" = ${characterId}
                RETURNING *;
            `
        )
        return characters
    } catch (error) {
        throw error
    }
}

module.exports = { createCharacter, getAllCharacters, getCharacterById, deleteCharacter, editCharacter }

