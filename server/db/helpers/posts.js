const client = require("../client")

const createPosts = async ({ title, body, authorid }) => {
    try {
        const {
            rows: [posts],
        } = await client.query(
            `
                INSERT INTO posts( title, body, authorid )
                VALUES($1, $2, $3)
                RETURNING *;
            `,
            [title, body, authorid]
        )
        return posts
    } catch (error) {
        throw error
    }
}

const getAllPosts = async () => {
    try {
        const { rows }
            = await client.query(`
            SELECT *
            FROM posts;
        `)
        return rows
    } catch (error) {
        throw error
    }
}

module.exports = { createPosts, getAllPosts } 