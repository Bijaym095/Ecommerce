import { useContext } from "react";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import Container from "../common/Container";
import { ProductCardInterface } from "../common/ProductCard";

import useCartContext from "../hooks/useCartContext";

const Cart = () => {
  const { cartItems, setCartItems } = useCartContext();

  const handleTotalAmout = (): number => {
    const total = cartItems.reduce((sum, item) => {
      const itemTotal = item.price * (item.quantity || 1);
      return sum + itemTotal;
    }, 0);

    return total;
  };

  const handleQuantityIncrement = (newItem: ProductCardInterface): void => {
    const updatedCartItems = cartItems.map((item) => {
      if (
        item.imgSrc === newItem.imgSrc &&
        item.price === newItem.price &&
        item.ratings === newItem.ratings &&
        item.title === newItem.title
      ) {
        return { ...item, quantity: (item.quantity || 1) + 1 };
      } else {
        return item;
      }
    });

    setCartItems(updatedCartItems);
  };

  const handleQuantityDecrement = (
    itemToDecrement: ProductCardInterface
  ): void => {
    const updatedCartItems = cartItems
      .map((item) => {
        if (
          item.imgSrc === itemToDecrement.imgSrc &&
          item.price === itemToDecrement.price &&
          item.ratings === itemToDecrement.ratings &&
          item.title === itemToDecrement.title
        ) {
          return {
            ...item,
            quantity: (item.quantity || 1) - 1,
          };
        } else {
          return item;
        }
      })
      .filter((item) => item.quantity !== 0); // remove the item from the cart if quantity becomes 0

    setCartItems(updatedCartItems);
  };

  return (
    <section className="section-padding">
      <Container>
        {cartItems.length <= 0 ? (
          <p className="text-center">No items added</p>
        ) : (
          <>
            <article className="space-y-6">
              {cartItems.map((item, index) => (
                <div
                  className="flex h-[200px] gap-4 border-b border-gray-300 pb-4"
                  key={index}
                >
                  {/* thumbnail */}
                  <div className="w-1/4">
                    <picture>
                      <img
                        className="aspect-square h-full w-full object-cover"
                        src={item.imgSrc}
                        alt={item.title}
                      />
                    </picture>
                  </div>
                  {/* thumbnail */}

                  {/* content */}
                  <div className="w-3/4 self-center">
                    <h3 className="mb-2 text-lg font-bold">{item.title}</h3>

                    <h5 className="mb-6 text-lg font-bold text-orange-400">
                      ${item.price}
                    </h5>

                    {/* quantity counter */}
                    <div className="space-x-4">
                      <button
                        className="rounded-lg bg-slate-300 px-4 py-2 duration-300 hover:bg-slate-500"
                        onClick={() => handleQuantityDecrement(item)}
                      >
                        <AiOutlineMinus />
                      </button>

                      <span>Qty: {item.quantity}</span>

                      <button
                        className="rounded-lg bg-slate-300 px-4 py-2 duration-300 hover:bg-slate-500"
                        onClick={() => handleQuantityIncrement(item)}
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>
                    {/* quantity counter */}
                  </div>
                  {/* content */}
                </div>
              ))}
            </article>

            <h5 className="mt-4 text-end font-bold">
              Subtotal:
              <span className="pl-2">${handleTotalAmout()}</span>
            </h5>
          </>
        )}
      </Container>
    </section>
  );
};

export default Cart;
