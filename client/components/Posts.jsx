import { fetchAllPosts } from "../fetching";
import { useState, useEffect } from "react";
import NewPost from "./NewPost";
import React from "react";
// import { deletePost } from "../fetching";
import DeletePost from "./DeletePost";
import EditPost from "./EditPost";

export default function Posts() {
  // const [token, setToken] = useState(null);
  // const [_id, set_Id] = useState("");
  const [posts, setPosts] = useState([]);

  async function refreshPosts() {
    const posts = await fetchAllPosts();
    setPosts(posts);
    console.log(posts);
    return posts;
  }
  useEffect(() => {
    refreshPosts();
  }, []);

  return (
    <div>
      {/* <div className="intro">
          <SignUpForm token={token} setToken={setToken} />
          <LoginForm token={token} setToken={setToken} />
          {token == null ? null : (
            <h4>You're logged in! Make or delete a post.</h4>
          )}
  
          <NewPost token={token} posts={posts} setPosts={setPosts} _id={set_Id} />
        </div> */}
      <div className="posts-container">
        {posts.map((post) => {
          return (
            <div className="single-post" key={post.postId}>
              <p>Title: {post.title}</p>
              <p>{post.body}</p>
              <DeletePost postId={post.postId} refreshPosts={refreshPosts} />
              <EditPost post={post} refreshPosts={refreshPosts} />
            </div>
          );
        })}
      </div>
      <div className="new-post-form">
        <NewPost refreshPosts={refreshPosts} />
      </div>
    </div>
  );
}
