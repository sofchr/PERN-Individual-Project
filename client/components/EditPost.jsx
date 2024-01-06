import React, { useState } from "react";
import { editPost } from "./fetching";
// import { useNavigate } from "react-router-dom";

//add 'token' to deconstructed props if using tokens
export default function EditPost({ post, onSubmit }) {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [error, setError] = useState(null);
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await editPost({
      postId: post.postId,
      title: title,
      body: body,
    });
    console.log(response);
    if (typeof response === "object" && response.postId !== undefined) {
      onSubmit();
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
        <button className="update-button">Update</button>
      </form>
    </div>
  );
}
