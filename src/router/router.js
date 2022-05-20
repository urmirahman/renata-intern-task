import React from "react";
import { Route, Routes } from "react-router-dom";
import Decode from "../pages/Decode";
import Encode from "../pages/Encode";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Encode />} />
      <Route path="/decode" element={<Decode />} />
    </Routes>
  );
};

export default Router;
