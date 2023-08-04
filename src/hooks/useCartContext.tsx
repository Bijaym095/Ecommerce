import { useContext } from "react";

import CartContext from "../context/Cart/CartContext";

const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw Error("useCartContext must be used within the CartState");
  }

  return context;
};

export default useCartContext;
