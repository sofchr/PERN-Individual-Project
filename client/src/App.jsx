// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Characters from "../components/Characters";
import NavBar from "../components/NavBar";
import Posts from "../components/Posts";
import Home from "../components/Home";
import "./App.css";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/characters" element={Characters()} />
        <Route path="/posts" element={Posts()} />
        {/* <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/login" element={<Login setToken={setToken} />} /> */}
      </Routes>
    </>
  );
}

export default App;
