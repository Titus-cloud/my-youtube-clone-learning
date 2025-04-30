import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SideBar from "./components/SideBar";
import { useStateContext } from "../context";

const App = () => {
  const {setSidebar, sidebar} = useStateContext()
  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/:categoryId/:videoId" element={<Video />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
