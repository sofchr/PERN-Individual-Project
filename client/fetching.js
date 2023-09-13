//fetching all characters

const baseUrl = "http://localhost:8080/api";

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

//will need token
export async function deletePost({ postId, token }) {
    try {
        const response = await fetch(`${baseUrl}/posts/${postId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
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