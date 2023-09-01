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


// const getAllUsers = async () => {
//     try {
//         const { rows }
//             = await client.query(`
//             SELECT *
//             FROM users;
//         `)
//         return rows
//     } catch (error) {
//         throw error
//     }
// }


module.exports = { createUser }

//remmeber to export getAllUsers if you include it again