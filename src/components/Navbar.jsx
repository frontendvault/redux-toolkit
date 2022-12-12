import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);

  return <div>Navbar {amount}</div>;
};

export default Navbar;
