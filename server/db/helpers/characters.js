const client = require("../client")

const createCharacter = async ({ name, human, description }) => {
    try {
        const {
            rows: [characters],
        } = await client.query(
            `
                INSERT INTO characters( name, human, description )
                VALUES($1, $2, $3)
                RETURNING *;
            `,
            [name, human, description]
        )
        return characters
    } catch (error) {
        throw error
    }
}

module.exports = { createCharacter } 