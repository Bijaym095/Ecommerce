import { useEffect, useReducer } from "react";

import { ProductCardProps } from "../../common/ProductCard";
import useFetchOrders from "../../hooks/useFetchOrders";
import useAuthContext from "../../hooks/useAuthContext";

import CartContext from "./CartContext";

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "SET_PRODUCT":
      return {
        ...state,
        orders: action.payload,
      };

    case "ADD_PRODUCT":
      const productToAddExists = state.orders.find(
        (order) => order.id === action.payload.id
      );

      let addUpdatedOrders;

      if (productToAddExists) {
        addUpdatedOrders = state.orders.map((order) =>
          order.id === action.payload.id
            ? { ...order, quantity: order.quantity + 1 }
            : order
        );
      } else {
        addUpdatedOrders = [...state.orders, action.payload];
      }

      return {
        ...state,
        orders: addUpdatedOrders,
      };

    case "DELETE_PRODUCT":
      const productToDeleteExists = state.orders.find(
        (order) => order.id === action.payload.id
      );

      let deleteUpdatedOrders;

      if (productToDeleteExists) {
        deleteUpdatedOrders = state.orders.map((order) =>
          order.id === action.payload.id
            ? { ...order, quantity: order.quantity - 1 }
            : order
        );
      } else {
        deleteUpdatedOrders = state.orders.filter(
          (order) => order.id !== action.payload.id
        );
      }

      return {
        ...state,
        orders: deleteUpdatedOrders,
      };

    default:
      return state;
  }
};

const CartState = ({ children }: CartStateProp) => {
  const [state, dispatch] = useReducer(cartReducer, {
    orders: [],
  });
  const { currentUser } = useAuthContext();
  const { fetchedOrders } = useFetchOrders();

  useEffect(() => {
    if (fetchedOrders.length > 0) {
      dispatch({ type: "SET_PRODUCT", payload: fetchedOrders });
    } else {
      dispatch({ type: "SET_PRODUCT", payload: [] });
    }
  }, [fetchedOrders, currentUser]);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

type CartStateProp = {
  children: React.ReactNode;
};

export default CartState;

type CartState = {
  orders: ProductCardProps[];
};

export type CartAction =
  | { type: "SET_PRODUCT"; payload: ProductCardProps[] }
  | { type: "ADD_PRODUCT"; payload: ProductCardProps }
  | { type: "DELETE_PRODUCT"; payload: ProductCardProps };
