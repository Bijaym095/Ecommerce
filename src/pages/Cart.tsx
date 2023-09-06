import { useEffect, useState } from "react";

import PreloaderImage from "../assets/images/preloader.gif";
import Container from "../common/Container";
import CartItems from "../components/CartItems";
import { ProductCardProps } from "../common/ProductCard";
import OrderSummary from "../components/OrderSummary";
import useFetchOrders from "../hooks/useFetchOrders";

const Cart = () => {
  const [cartOrders, setCartOrders] = useState<ProductCardProps[]>([]);
  const { isLoading, fetchedOrders } = useFetchOrders();

  const calculateTotalAmount = (): number => {
    const total = cartOrders.reduce((sum, order) => {
      const itemTotal = order.price * (order.quantity || 1);
      return sum + itemTotal;
    }, 0);

    return total;
  };

  useEffect(() => {
    if (!isLoading) {
      setCartOrders(fetchedOrders);
    }
  }, [isLoading, fetchedOrders]);

  if (isLoading) {
    return (
      <section>
        <Container className="grid h-[250px] place-items-center">
          {" "}
          <img src={PreloaderImage} alt="Loading..." />
        </Container>
      </section>
    );
  }

  return (
    <section className="section-padding bg-[#EEEEEE]">
      <Container>
        {cartOrders.length <= 0 ? (
          <p className="text-center">No items added</p>
        ) : (
          <>
            <CartItems cartOrders={cartOrders} setCartOrders={setCartOrders} />

            <OrderSummary
              cartOrders={cartOrders}
              calculateTotalAmount={calculateTotalAmount}
            />
          </>
        )}
      </Container>
    </section>
  );
};

export default Cart;
