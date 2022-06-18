import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Login from "./Login";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
