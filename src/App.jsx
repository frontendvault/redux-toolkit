import { useEffect } from "react";
import Navbar from "./components/Navbar";
import ShoppingCartContainer from "./components/ShoppingCartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <div className="App">
      {isOpen && <Modal />}
      <Navbar />
      <ShoppingCartContainer />
    </div>
  );
}

export default App;
