import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div id="navbar-section">
      <Link to="/">Home</Link>
      <Link to="/characters">Characters</Link>
      <Link to="/posts">Forum Posts</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
