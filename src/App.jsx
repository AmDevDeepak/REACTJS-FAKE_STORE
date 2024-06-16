import React from "react";
import Home from "./Components/Home";
import Dets from "./Components/Dets";
import { Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Dets />} />
      </Routes>
    </div>
  );
};

export default App;

