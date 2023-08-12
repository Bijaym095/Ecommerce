import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

import { ProductCardProps } from "../common/ProductCard";
import { db } from "../config/firebase";
import useAuthContext from "../hooks/useAuthContext";

const useAddProduct = () => {
  const { currentUser } = useAuthContext();

  let cartProducts: ProductCardProps[] = [];

  const addProductToFirestore = async (newItem: ProductCardProps) => {
    if (currentUser) {
      const cartRef = doc(db, "cart", currentUser.uid);

      const cartSnap = await getDoc(cartRef);

      //   Initializing the cartProducts to fetched orders data
      if (cartSnap.exists()) {
        const cartData = cartSnap.data();
        cartProducts = cartData.orders;
      } else {
        console.log("No such document");
      }

      //   checking the newItem is already in the cart
      const newItemIndex = cartProducts.findIndex(
        (item) => item.id === newItem.id
      );

      if (newItemIndex !== -1) {
        // Update the quantity of the existing item
        const updatedCartProducts = cartProducts.map((item, index) => {
          if (index === newItemIndex) {
            return { ...item, quantity: item.quantity + 1 };
          }

          return item;
        });

        // Update the Firestore document with the updated cart products
        await updateDoc(cartRef, { orders: updatedCartProducts });
      } else {
        const updatedCartProducts = [...cartProducts, newItem];

        await setDoc(cartRef, { orders: updatedCartProducts });
      }
    }
  };

  return { addProductToFirestore };
};

export default useAddProduct;
