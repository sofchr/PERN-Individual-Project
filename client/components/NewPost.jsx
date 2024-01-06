import React, { useState } from "react";
import { createNewPost, fetchAllPosts } from "./fetching";
// import { useNavigate } from "react-router-dom";

//add 'token' to deconstructed props if using tokens
export default function NewPost({ refreshPosts, token }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await createNewPost({
      token,
      title: title,
      body: body,
    });
    console.log(response);
    if (typeof response === "object" && response.postId !== undefined) {
      refreshPosts();
      setTitle("");
      setBody("");
    } else {
      setError(response.error.message);
    }
  }

  return (
    <div className="submit-form">
      <h4>Add a New Post</h4>
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <input
          value={title}
          type="text"
          name="title"
          placeholder="Subject of Post"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          value={body}
          type="text"
          name="body"
          placeholder="Whatcha wanna talk about?"
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
