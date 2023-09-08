import { useNavigate } from "react-router-dom";
import { deletePost } from "../fetching";

export default function DeletePost(postId) {
  const postIdDP = postId.postId;

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
