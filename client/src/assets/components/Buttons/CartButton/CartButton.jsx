import React from "react";
import { Link } from "react-router-dom";
import { TbShoppingCartCode } from "react-icons/tb";

const CartButton = () => {
  const cartItems = 0;
  return (
    <div className="cart-button">
      <Link to={"/cart"}>
        <TbShoppingCartCode />
        {cartItems > 0 && <span className="cart-item-count">{cartItems}</span>}
      </Link>
    </div>
  );
};

export default CartButton;
