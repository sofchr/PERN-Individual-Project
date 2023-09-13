// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Characters from "../components/Characters";
import NavBar from "../components/NavBar";
import Posts from "../components/Posts";
import Home from "../components/Home";
import "./App.css";
import { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <NavBar token={token} />

      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/characters" element={Characters()} />
        <Route path="/posts" element={<Posts token={token} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
      </Routes>
    </>
  );
}

export default App;
