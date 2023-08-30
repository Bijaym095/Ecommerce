import Container from "../common/Container";
import CartItems from "../components/CartItems";
import OrderSummary from "../components/OrderSummary";
import useCartContext from "../hooks/useCartContext";

const Cart = () => {
  const { orders } = useCartContext();

  const calculateTotalAmount = (): number => {
    const total = orders.reduce((sum, order) => {
      const itemTotal = order.price * (order.quantity || 1);
      return sum + itemTotal;
    }, 0);

    return total;
  };

  return (
    <section className="section-padding bg-[#EEEEEE]">
      <Container>
        {orders.length <= 0 ? (
          <p className="text-center">No items added</p>
        ) : (
          <>
            <CartItems orders={orders} />

            <OrderSummary
              orders={orders}
              calculateTotalAmount={calculateTotalAmount}
            />
          </>
        )}
      </Container>
    </section>
  );
};

export default Cart;
