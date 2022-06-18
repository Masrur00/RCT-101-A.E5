import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      Navbar
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/cart">Cart</Link>
    </>
  );
};

export default Navbar;
