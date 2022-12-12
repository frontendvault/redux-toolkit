import React from "react";
import { clearCart } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";

const ShoppingCartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <div className="container">
        <h1>You bag is empty</h1>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col">
          <h1 className="fw-bold">Your bag</h1>
        </div>
      </div>
      <div className="row">
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <div className="row">
        <div className="col">
          <footer className="bg-secondary p-4 text-center">
            <h4 className="text-white">Total:{total}</h4>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(clearCart())}
            >
              clear cart
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartContainer;
