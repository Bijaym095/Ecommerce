import { useState } from "react";

import CartContext from "./CartContext";

import { ProductCardProps } from "../../common/ProductCard";

const CartState: React.FC<CartStateProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ProductCardProps[]>([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartState;

type CartStateProps = {
  children: React.ReactNode;
};
