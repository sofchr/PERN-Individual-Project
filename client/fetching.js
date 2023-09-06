//fetching all characters

const baseUrl = "http://localhost:8080/api/";

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

export async function fetchSingleCharacter() {
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