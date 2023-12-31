import { useState } from "react";
import React from "react";
import DeletePost from "./DeletePost";
import EditPost from "./EditPost";

export default function SinglePost({ post, refreshPosts, token }) {
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <div className="single-post" key={post.postId}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <DeletePost
        postId={post.postId}
        refreshPosts={refreshPosts}
        token={token}
      />
      {showEditForm ? (
        <EditPost
          token={token}
          post={post}
          onSubmit={() => {
            refreshPosts();
            setShowEditForm(false);
          }}
        />
      ) : (
        <button className="edit-button" onClick={() => setShowEditForm(true)}>
          Edit
        </button>
      )}
    </div>
  );
}
