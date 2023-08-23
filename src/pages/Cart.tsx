import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import Container from "../common/Container";
import useCartContext from "../hooks/useCartContext";
import { useMemo } from "react";

const Cart = () => {
  const { orders } = useCartContext();

  const calculateTotalAmount = (): number => {
    const total = orders.reduce((sum, order) => {
      const itemTotal = order.price * (order.quantity || 1);
      return sum + itemTotal;
    }, 0);

    return total;
  };

  // TODO quanity counter functionality for a cart product

  return (
    <section className="section-padding">
      <Container>
        {orders.length <= 0 ? (
          <p className="text-center">No items added</p>
        ) : (
          <>
            <h2 className="mb-6 text-[1.2rem] font-bold">Cart Items</h2>

            {/* ====== cart-items-wrapper ========= */}
            <div className="space-y-6">
              {orders.map((order) => (
                <div
                  className="flex h-[200px] gap-4 border-b border-gray-300 pb-4"
                  key={order.id}
                >
                  {/* ======== thumbnail ============ */}
                  <header className="w-1/4">
                    <picture>
                      <img
                        className="aspect-square h-full w-full object-cover"
                        src={order.imgSrc}
                        alt={order.title}
                      />
                    </picture>
                  </header>
                  {/* ======== thumbnail ============ */}

                  {/* ========== content ============ */}
                  <main className="w-3/4 self-center">
                    <h3 className="mb-2 text-lg font-bold">{order.title}</h3>

                    <h5 className="mb-6 text-lg font-bold text-orange-400">
                      ${order.price}
                    </h5>
                    {/* ========== quantity counter ========*/}
                    <div className="space-x-4">
                      <button className="rounded-lg bg-slate-300 px-4 py-2 duration-300 hover:bg-slate-500">
                        <AiOutlineMinus />
                      </button>

                      <span>Qty: {order.quantity}</span>

                      <button className="rounded-lg bg-slate-300 px-4 py-2 duration-300 hover:bg-slate-500">
                        <AiOutlinePlus />
                      </button>
                    </div>
                    {/* ========= quantity counter ======== */}
                  </main>
                  {/* =========== content ============ */}
                </div>
              ))}
            </div>
            {/* ====== cart-items-wrapper ========= */}

            <h5 className="mt-4 text-end font-bold">
              Subtotal:
              <span className="pl-2">${calculateTotalAmount()}</span>
            </h5>
          </>
        )}
      </Container>
    </section>
  );
};

export default Cart;
