import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const ShoppingCartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <div className="container">
        <h1>You bag is empty</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default ShoppingCartContainer;
