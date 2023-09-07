import React, { useState } from "react";
import { createPost } from ".../server/db/helpers/posts";
//CURRENTLY GETTING ERROR WITH ABOVE ROUTE

//add 'token' to deconstructed props if using tokens
export default function NewPost({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await createPost(
      {
        title: title,
        body: body,
      }
      //put token here if needed later
    );
    if (response.success) {
      console.log("New Forum Post: ", response.data.posts.newForumPost);

      // Resetting all posts manually
      const newPostsList = [...posts, response.data.posts.newForumPost];
      setPosts(newPostsList);

      setTitle("");
      setBody("");
    } else {
      setError(response.error.message);
    }
  }

  return (
    <div className="submit-form">
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <input
          value={title}
          type="text"
          name="title"
          placeholder="Title of Post"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          value={body}
          type="text"
          name="body"
          placeholder="What do you wanna talk about?"
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
