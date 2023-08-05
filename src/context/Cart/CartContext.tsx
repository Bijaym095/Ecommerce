import { Dispatch, SetStateAction, createContext } from "react";
import { ProductCardProps } from "../../common/ProductCard";

const CartContext = createContext<CartContext>({
  cartItems: [],
  setCartItems: () => {},
});

export default CartContext;

type CartContext = {
  cartItems: ProductCardProps[];
  setCartItems: Dispatch<SetStateAction<ProductCardProps[]>>;
};
