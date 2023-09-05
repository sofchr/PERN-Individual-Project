const client = require("../client")

const createPost = async ({ title, body, authorid }) => {
    try {
        const {
            rows: [post],
        } = await client.query(
            `
                INSERT INTO posts( title, body, authorid )
                VALUES($1, $2, $3)
                RETURNING *;
            `,
            [title, body, authorid]
        )
        return post
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

const getPostById = async (postId) => {
    try {
        const {
            rows: [posts]
        } = await client.query(
            `
                SELECT *
                FROM posts
                WHERE "postId" =${postId};
            `
        )
        return posts
    } catch (error) {
        throw error
    }
}


module.exports = { createPost, getAllPosts, getPostById } 