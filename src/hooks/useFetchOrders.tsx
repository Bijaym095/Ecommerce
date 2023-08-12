import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

import { ProductCardProps } from "../common/ProductCard";
import useAuthContext from "../hooks/useAuthContext";
import { db } from "../config/firebase";

const useFetchOrders = (): UseFetchOrdersReturnType => {
  const [fetchedOrders, setFetchedOrders] = useState<ProductCardProps[]>([]);
  const [error, setError] = useState("");
  const { currentUser } = useAuthContext();

  useEffect(() => {
    if (currentUser) {
      const fetchOrders = async () => {
        try {
          const cartRef = doc(db, "cart", currentUser.uid);

          const cartSnap = await getDoc(cartRef);

          if (cartSnap.exists()) {
            setError("");
            const cartData = cartSnap.data();
            setFetchedOrders(cartData.orders);
          } else {
            setError("No such document found");
          }
        } catch (error) {
          setError("Error fetching orders");
        }
      };

      fetchOrders();
    }
  }, [currentUser]);

  return { fetchedOrders, error };
};

export default useFetchOrders;

type UseFetchOrdersReturnType = {
  fetchedOrders: ProductCardProps[];
  error: string;
};
