import { Dispatch, SetStateAction, createContext } from "react";
import { ProductCardInterface } from "../../common/ProductCard";

interface CartContextInterface {
  cartItems: ProductCardInterface[];
  setCartItems: Dispatch<SetStateAction<ProductCardInterface[]>>;
}

const CartContext = createContext<CartContextInterface>({
  cartItems: [],
  setCartItems: () => {},
});

export default CartContext;
