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



// export const createNewPost = async (post) => {

//     try {
//         const response = await fetch(`${baseUrl}/posts`, {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 'post': post
//             })
//         });
//         const result = await response.json();
//         console.log(result);
//         return result
//     } catch (err) {
//         console.error(err);
//     }
// }




//added curly brackets around title, body and is now successfully posting, but not reloading page
export async function createNewPost({ title, body }) {
    try {
        const response = await fetch(`${baseUrl}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
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