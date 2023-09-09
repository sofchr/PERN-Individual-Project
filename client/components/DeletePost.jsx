import { useNavigate } from "react-router-dom";
import { deletePost, fetchAllPosts } from "../fetching";
import { useState } from "react";

// export default function DeletePost(postId) {
//   const navigate = useNavigate();

//   async function handleDelete(event) {
//     console.log("delete");
//     event.preventDefault();

//     try {
//       const result = await deletePost(postId);
//       navigate("/posts");
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   return (
//     <div>
//       <button onClick={handleDelete}>Delete Post</button>
//     </div>
//   );
// }

//jaclyn's onlick
{
  /* <button onClick={() => handleDelete(song.songId)}>Delete</button> */
}

export default function DeletePost({ postId, refreshPosts }) {
  const handleDelete = async (postId) => {
    try {
      await deletePost(postId);
      refreshPosts();
    } catch (error) {
      console.error("trouble deleting post", error);
    }
  };

  return <button onClick={() => handleDelete(postId)}>Delete</button>;
}
