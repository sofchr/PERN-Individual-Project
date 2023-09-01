const client = require('./client')

const { createUser } = require('./helpers/users')
const { createCharacter, getAllCharacters } = require('./helpers/characters')
const { createPosts } = require('./helpers/posts')

const { users, characters, posts } = require('./seedData')

//Drop Tables for cleanliness
const dropTables = async () => {
    try {
        console.log("Starting to drop tables")
        await client.query(`
        DROP TABLE IF EXISTS characters;
        DROP TABLE IF EXISTS posts; 
        DROP TABLE IF EXISTS users;
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
            posterid INTEGER REFERENCES users("userId"),
            human BOOLEAN NOT NULL,
            description varchar(255) NOT NULL
        );

        CREATE TABLE posts (
            "postId" SERIAL PRIMARY KEY,
            title varchar(255) UNIQUE NOT NULL,
            body varchar(255) NOT NULL,
            authorid INTEGER REFERENCES users("userId")


        );
    `)
    console.log("Tables built!")
}


const createInitialUsers = async () => {
    try {
        for (const user of users) {
            await createUser(user)
        }
        console.log("created users")
    } catch (error) {
        throw error
    }
}

const createInitialCharacters = async () => {
    try {
        for (const character of characters) {
            await createCharacter(character)
        }
        console.log("created characters")
    } catch (error) {
        throw error
    }
}

const createInitialPosts = async () => {
    try {
        for (const post of posts) {
            await createPosts(post)
        }
        console.log("created posts")
    } catch (error) {
        throw error
    }
}


const rebuildDb = async () => {
    try {
        //ACTUALLY connect to my local database
        client.connect()
        //Run our functions
        await dropTables()
        await createTables()

        //Generating starting data
        console.log("starting to seed...")
        await createInitialUsers()
        await createInitialCharacters()
        await createInitialPosts()

    } catch (error) {
        console.error(error)
    } finally {
        //close our connection
        client.end()
    }
}

rebuildDb()