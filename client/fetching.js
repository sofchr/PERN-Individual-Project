const express = require('express');
const cors = require('cors');

const app = express();

// Use cors middleware
app.use(cors({
    origin: 'https://welcome-to-the-unknown.onrender.com', // Replace with your frontend domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials if your frontend makes requests with credentials
}));

//og base url below
// const baseUrl = "http://localhost:8080/api";
//for render
const baseUrl = "https://api.render.com/deploy/srv-cksk1e85vl2c739tq2bg?key=v38K9DeuyVI";

export async function fetchAllCharacters() {
    try {
        const response = await fetch(`${baseUrl}/characters`);
        const returnVal = await response.json();
        return returnVal;
    } catch (err) {
        console.log(err);
        return err;
    }
};

export async function fetchSingleCharacter(characterId) {
    try {
        const response = await fetch(`${baseUrl}/characters/${characterId}`);
        const returnVal = await response.json();
        return returnVal;
    } catch (err) {
        console.log(err);
        return err;
    }
};

export async function fetchAllPosts() {
    try {
        const response = await fetch(`${baseUrl}/posts`);
        const returnVal = await response.json();
        return returnVal;
    } catch (err) {
        console.log(err);
        return err;
    }
};

export async function fetchSinglePost() {
    try {
        const response = await fetch(`${baseUrl}/posts/${postId}`);
        const returnVal = await response.json();
        return returnVal;
    } catch (err) {
        console.log(err);
        return err;
    }
};

//will need token
export async function deletePost({ postId, token }) {
    try {
        const response = await fetch(`${baseUrl}/posts/${postId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });
        const result = await response
        console.log(result);
        // return result;
    } catch (err) {
        console.error(err);
    }
}


//will need token
export async function createNewPost({ title, body, token }) {
    try {
        const response = await fetch(`${baseUrl}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                title,
                body
            })
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

//will need to add token to this 
export async function editPost({ title, body, postId, token }) {

    try {
        const response = await fetch(`${baseUrl}/posts/${postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                title,
                body
            })
        });
        const result = await response.json();
        console.log(result);
        return result;
    } catch (err) {
        console.error(err);
    }
}


export const registerUser = async (username, password) => {
    try {
        const response = await fetch(
            `${baseUrl}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                username: username,
                password: password

            })
        });
        const result = await response.json();
        console.log(result)
        return result
    } catch (err) {
        console.error(err);
    }
}

export const login = async (username, password) => {

    try {
        const response = await fetch(`${baseUrl}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                username: username,
                password: password

            })
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
}