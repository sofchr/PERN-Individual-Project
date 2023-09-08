import React, { useState } from "react";
import { createNewPost, fetchAllPosts } from "../fetching";
// import { useNavigate } from "react-router-dom";

//add 'token' to deconstructed props if using tokens
export default function NewPost({ refreshPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await createNewPost({
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
