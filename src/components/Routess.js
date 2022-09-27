import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";
function Routess(props) {
  return (
    <div className="p-4">
      
      <Routes>
        <Route path="/" element={<Navigate to="/search" />}></Route>
        <Route path={"/search"} element={<Results/>}></Route>
        <Route path={"/image"} element={<Results/>}></Route>
        <Route path={"/news"} element={<Results/>}></Route>
        <Route path={"/video"} element={<Results/>}></Route>
      </Routes>
    </div>
  );
}

export default Routess;
