const client = require('./client')

const { users, characters, posts } = require('./seedData')

//Drop Tables for cleanliness
const dropTables = async () => {
    try {
        console.log("Starting to drop tables")
        await client.query(`
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS characters;
        DROP TABLE IF EXISTS posts;
    
        `)
        console.log("Tables dropped!")
    } catch (error) {
        console.log("Error dropping tables")
        throw error
    }
}


const createTables = async () => {
    console.log("Building tables...")
    await client.query(`
        CREATE TABLE users (
            "userId" SERIAL PRIMARY KEY,
            username varchar(255) UNIQUE NOT NULL,
            password varchar(255) NOT NULL,
            name varchar(255) NOT NULL
        );
        
        CREATE TABLE characters (
            "characterId" SERIAL PRIMARY KEY,
            name varchar(255) NOT NULL,
            "userId" INTEGER REFERENCES users("userId"),
            human BOOLEAN NOT NULL
            description NOT NULL
        );

        CREATE TABLE posts (
            title varchar(255) UNIQUE NOT NULL,
            body varchar(255) NOT NULL
            "userId" INTEGER REFERENCES users("userId")


        );
    `)
    console.log("Tables built!")
}