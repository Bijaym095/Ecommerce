import { doc, updateDoc } from "firebase/firestore";

import { db } from "../config/firebase";
import { ProductCardProps } from "../common/ProductCard";
import useAuthContext from "./useAuthContext";

const useHandleCartAction = () => {
  const { currentUser } = useAuthContext();

  const handleCartAction = async (updatedOrders: ProductCardProps[]) => {
    if (currentUser) {
      try {
        const cartRef = doc(db, "cart", currentUser.uid);
        await updateDoc(cartRef, { orders: updatedOrders });
      } catch (error) {
        console.error("Error updating cart in Firebase:", error);
      }
    }
  };

  return handleCartAction;
};

export default useHandleCartAction;
