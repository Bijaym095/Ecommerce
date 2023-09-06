import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";

import { ProductCardProps } from "../common/ProductCard";
import { db } from "../config/firebase";
import useAuthContext from "../hooks/useAuthContext";

const useFetchOrders = (): UseFetchOrdersReturnType => {
  const [fetchedOrders, setFetchedOrders] = useState<ProductCardProps[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { currentUser } = useAuthContext();

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    const cartRef = doc(db, "cart", currentUser.uid);

    const unsubscribe = onSnapshot(cartRef, (cartSnap) => {
      try {
        if (cartSnap.exists()) {
          const cartData = cartSnap.data();
          setFetchedOrders(cartData.orders);
          setIsLoading(false);
          setError("");
        } else {
          setError("No orders found");
        }
      } catch (error) {
        setError("Error fetching orders");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [currentUser]);

  return { fetchedOrders, error, isLoading };
};

export default useFetchOrders;

type UseFetchOrdersReturnType = {
  fetchedOrders: ProductCardProps[];
  error: string;
  isLoading: boolean;
};
