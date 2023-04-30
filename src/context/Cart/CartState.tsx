import { useState } from "react";
import CartContext from "./CartContext";

import { ProductCardInterface } from "../../common/ProductCard";

interface CartStateProps {
  children: React.ReactNode;
}

const CartState: React.FC<CartStateProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ProductCardInterface[]>([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
