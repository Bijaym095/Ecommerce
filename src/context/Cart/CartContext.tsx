import { createContext } from "react";

import { ProductCardProps } from "../../common/ProductCard";

import { CartAction } from "./CartState";

const CartContext = createContext<CartContext | undefined>(undefined);

export default CartContext;

type CartContext = {
  orders: ProductCardProps[];
  dispatch: React.Dispatch<CartAction>;
};
