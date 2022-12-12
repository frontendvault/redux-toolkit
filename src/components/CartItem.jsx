import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const CartItem = ({ id, title, imgUrl, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="col-md-4 mb-3 p-3">
      <div className="col">
        <img src={imgUrl} alt={title} className="img-fluid" />
        <h3 className="my-2">{title}</h3>
        <p>{price}</p>
        <div className="d-grid">
          <button className="btn btn-danger  text-center">
            Remove from cart
          </button>
        </div>
      </div>
      <div className="col bg-light border mt-3">
        <div className="d-flex justify-content-between">
          <button className="col btn btn-sm btn-secondary">+</button>
          <div className="col text-center">{amount}</div>
          <button className="col btn btn-sm btn-secondary">-</button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
