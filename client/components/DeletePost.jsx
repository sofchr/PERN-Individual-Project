import { useNavigate } from "react-router-dom";
import { deletePost, fetchAllPosts } from "../fetching";

export default function DeletePost(postId) {
  const navigate = useNavigate();

  async function handleDelete(event) {
    console.log("delete");
    event.preventDefault();

    try {
      const result = await deletePost(postId);
      navigate("/posts");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
}

//jaclyn's onlick
{
  /* <button onClick={() => handleDelete(song.songId)}>Delete</button> */
}

// const handleDelete = async (postId) => {
//     const [updatedPosts, setUpdatedPosts]
//     try {
//         await deletePost(postId);
//         const updatedPosts = await fetchAllPosts();

//     }
// }
