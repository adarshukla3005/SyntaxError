import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home.jsx"
import Team from "./components/Team/Team.jsx"
import Music from "./components/Music/Music.jsx"

export default function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/music" element={<Music />}></Route>

      </Routes>
    </BrowserRouter>
  );
}
