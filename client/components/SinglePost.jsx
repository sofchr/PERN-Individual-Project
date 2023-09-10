import { useState } from "react";
import React from "react";
import DeletePost from "./DeletePost";
import EditPost from "./EditPost";

export default function SinglePost({ post, refreshPosts }) {
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <div className="single-post" key={post.postId}>
      <p>Title: {post.title}</p>
      <p>{post.body}</p>
      <DeletePost postId={post.postId} refreshPosts={refreshPosts} />
      {showEditForm ? (
        <EditPost post={post} refreshPosts={refreshPosts} />
      ) : (
        <button className="edit-button" onClick={() => setShowEditForm(true)}>
          Edit
        </button>
      )}
    </div>
  );
}
