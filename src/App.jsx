/** @format */
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import Home from "./pages/Home";
import Artist from './pages/Artist';
import Music from './pages/Music';
import Videos from './pages/Videos';
import Session from './pages/Session'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/music" element={<Music />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/session" element={<Session />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
