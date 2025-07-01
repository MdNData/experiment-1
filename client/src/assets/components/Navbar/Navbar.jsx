import React from "react";
import { useState } from "react";
import MenuContainer from "./MenuContainer/MenuContainer";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <MenuContainer />
      </nav>
    </div>
  );
};

export default Navbar;
