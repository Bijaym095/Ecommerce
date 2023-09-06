import { useEffect, useReducer } from "react";

import { ProductCardProps } from "../../common/ProductCard";
import useFetchOrders from "../../hooks/useFetchOrders";
import useHandleCartAction from "../../hooks/useHandleCartAction";

import CartContext from "./CartContext";

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "SET_PRODUCT":
      return {
        orders: action.payload,
      };

    case "ADD_PRODUCT":
      const { id, quantity } = action.payload;
      const productToAddExists = state.orders.find((order) => order.id === id);
      let addUpdatedOrders;

      if (!productToAddExists) {
        addUpdatedOrders = [...state.orders, action.payload];
      } else {
        addUpdatedOrders = state.orders.map((order) =>
          order.id === id
            ? {
                ...order,
                // If the added product's quantity is 1, increase the quantity by 1 else add the added product's quantity to the current quantity
                quantity:
                  quantity === 1
                    ? order.quantity + 1
                    : order.quantity + quantity,
              }
            : order,
        );
      }

      return {
        orders: addUpdatedOrders,
      };

    case "DELETE_PRODUCT":
      const updatedOrdersAfterDeletion = state.orders.filter(
        (order) => order.id !== action.payload,
      );

      return {
        orders: updatedOrdersAfterDeletion,
      };

    case "UPDATE_PRODUCT":
      const updatedProducts = action.payload;
      const updatedOrders = [...state.orders];

      for (const product of updatedProducts) {
        const updateOrderIndex = updatedOrders.findIndex(
          (order) => order.quantity !== product.quantity,
        );

        if (updateOrderIndex !== -1) {
          // If the product exists in state.orders, update its quantity
          updatedOrders[updateOrderIndex].quantity = product.quantity;
        }
      }

      return {
        orders: updatedOrders,
      };

    default:
      return state;
  }
};

const CartState = ({ children }: CartStateProps) => {
  const [state, dispatch] = useReducer(cartReducer, {
    orders: [],
  });
  const handleCartAction = useHandleCartAction();
  const { fetchedOrders, isLoading } = useFetchOrders();

  // setting the default value of orders that is fetched from fiestore after loading
  useEffect(() => {
    if (!isLoading) {
      dispatch({ type: "SET_PRODUCT", payload: fetchedOrders });
    }
  }, [fetchedOrders, isLoading]);

  // updating the orders in the firestore on every change in orders
  useEffect(() => {
    handleCartAction(state.orders);
  }, [state.orders]);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

type CartStateProps = {
  children: React.ReactNode;
};

export default CartState;

type CartState = {
  orders: ProductCardProps[];
};

export type CartAction =
  | { type: "SET_PRODUCT"; payload: ProductCardProps[] }
  | { type: "ADD_PRODUCT"; payload: ProductCardProps }
  | { type: "DELETE_PRODUCT"; payload: string }
  | { type: "UPDATE_PRODUCT"; payload: ProductCardProps[] };
