import React, { useState } from "react";
import Logo from "../../Logo/Logo";
import CartButton from "../../Buttons/CartButton/CartButton";
import AccountButton from "../../Buttons/AccountButton/AccountButton";

const MenuContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navbar-menu-container">
      <Logo isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <CartButton />
      <AccountButton />
      <p>menu</p>
    </div>
  );
};

export default MenuContainer;
