import { useEffect } from "react";
import Navbar from "./components/Navbar";
import ShoppingCartContainer from "./components/ShoppingCartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <div className="App">
      <Navbar />
      <ShoppingCartContainer />
    </div>
  );
}

export default App;
