// import { useNavigate } from "react-router-dom";
import { deletePost } from "./fetching";
// import { useState } from "react";

export default function DeletePost({ postId, refreshPosts, token }) {
  const handleDelete = async (postId) => {
    try {
      await deletePost({ postId, token });
      refreshPosts();
    } catch (error) {
      console.error("trouble deleting post", error);
    }
  };

  return <button onClick={() => handleDelete(postId)}>Delete</button>;
}
