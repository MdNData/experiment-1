import React, { useState } from "react";
import Logo from "../../Logo/Logo";
import CartButton from "../../Buttons/CartButton/CartButton";
import AccountButton from "../../Buttons/AccountButton/AccountButton";
import MenuBtn from "../../Buttons/MenuBtn/MenuBtn";
import { useAppContext } from "../../../../context";
import Menu from "../Menu/Menu";

const MenuContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useAppContext();
  return (
    <div className="navbar-menu-container">
      <Logo isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <CartButton />
      <AccountButton />
      {width < 960 ? (
        <MenuBtn isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      ) : null}
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default MenuContainer;
