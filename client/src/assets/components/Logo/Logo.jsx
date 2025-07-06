import React from "react";
import { NavLink } from "react-router-dom";

const Logo = ({ isMenuOpen = "", setIsMenuOpen = () => {} }) => {
  return (
    <div className="logo" title="Codexency Logo">
      <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
        <span>Codexency</span>
      </NavLink>
    </div>
  );
};

export default Logo;
