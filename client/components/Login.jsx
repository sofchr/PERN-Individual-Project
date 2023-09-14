import { useState } from "react";
import { login } from "../fetching";
import { useNavigate } from "react-router-dom";

export default function Login({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    const register = await login(username, password);
    // console.log("response.headers", response.data);

    // const headers = response.headers;
    // console.log("Response headers", headers);
    //removed .data from below
    setToken(register.token);
    console.log(register);
    setUsername("");
    setPassword("");
    // nav("/posts");
  };

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          id="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          id="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {token == null ? null : <h4>You're logged in!</h4>}
    </>
  );
}
