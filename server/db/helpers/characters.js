const client = require("../client")

const createCharacter = async ({ name, human, description, posterid }) => {
    try {
        const {
            rows: [characters],
        } = await client.query(
            `
                INSERT INTO characters( name, human, description, posterid )
                VALUES($1, $2, $3, $4)
                RETURNING *;
            `,
            [name, human, description, posterid]
        )
        return characters
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

module.exports = { createCharacter, getAllCharacters } 