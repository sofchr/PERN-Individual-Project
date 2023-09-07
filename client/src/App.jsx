// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Characters from "../components/Characters";
import NavBar from "../components/NavBar";
import Posts from "../components/Posts";
import Home from "../components/Home";
// import NewPost from "../components/NewPost";
// import Users from "./components/users";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      {/* New post not working below, routing issue */}
      {/* <NewPost /> */}
      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/characters" element={Characters()} />
        <Route path="/posts" element={Posts()} />
      </Routes>
    </>
  );
}

export default App;
