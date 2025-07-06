import React, { useState } from "react";
import Logo from "../../Logo/Logo";

const MenuContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navbar-menu-container">
      <Logo isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <p>cartbutton</p>
      <p>accessbutton</p>
      <p>menu</p>
    </div>
  );
};

export default MenuContainer;
