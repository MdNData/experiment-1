import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ isMenuOpen = false, setIsMenuOpen = () => {} }) => {
  return (
    <div
      className={isMenuOpen ? "nav-menu" : "nav-menu closed"}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <ul onClick={() => setIsMenuOpen(true)}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "page_now" : "")}
            to="/"
          >
            <span>Acasa</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
