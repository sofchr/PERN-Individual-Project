import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div id="navbar-section">
      <Link to="/">Home</Link>
      <Link to="/characters">Character</Link>
      <Link to="/posts">Forum Posts</Link>
    </div>
  );
}
