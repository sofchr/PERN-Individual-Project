const client = require('../client')

const createUser = async ({ username, password, name }) => {
    try {
        const {
            rows: [user],
        } = await client.query(
            `
                INSERT INTO users(username, password, name)
                VALUES($1, $2, $3)
                RETURNING *;
            `,

            [username, password, name]
        )
        return user
    } catch (error) {
        throw error
    }
}


const getAllUsers = async () => {
    try {
        const { rows }
            = await client.query(`
            SELECT *
            FROM users;
        `)
        return rows
    } catch (error) {
        throw error
    }
}



const getUserById = async (userId) => {
    try {
        const {
            rows: [users]
        } = await client.query(
            `
                SELECT *
                FROM users
                WHERE "userId" =${userId};
            `
        )
        return users
    } catch (error) {
        throw error
    }
}

const getUserByUsername = async (username) => {
    const {
        rows: [user],
    } = await client.query(
        `
        SELECT * 
        FROM users
        WHERE users.username = $1
        `,
        [username]
    )
    return user;
}
module.exports = { createUser, getAllUsers, getUserById, getUserByUsername }

