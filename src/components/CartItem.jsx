import React from "react";

const CartItem = ({ id, title, imgUrl, price, amount }) => {
  return (
    <article className="col-md-4 mb-3 p-3">
      <img src={imgUrl} alt={title} className="img-fluid" />
      <h3>{title}</h3>
      <p>{price}</p>
      <button className="btn btn-secondary">Add to cart</button>
    </article>
  );
};

export default CartItem;
