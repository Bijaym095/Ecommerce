import { useState } from "react";
import { Button } from "../../common/Button";
import { ProductCardProps } from "../../common/ProductCard";
import useCartContext from "../../hooks/useCartContext";
import { formatCurrency } from "../../utils";

const OrderSummary: React.FC<OrderSummaryProps> = ({
  cartOrders,
  calculateTotalAmount,
}) => {
  const { dispatch, orders } = useCartContext();

  const handleUpdateCart = () => {
    const updatedProducts = [];

    // Loop through cartOrders and check for changes
    for (const cartOrder of cartOrders) {
      const matchingOrder = orders.find(({ id }) => id === cartOrder.id);

      if (matchingOrder && matchingOrder.quantity !== cartOrder.quantity) {
        updatedProducts.push(cartOrder);
      }
    }

    if (updatedProducts.length > 0) {
      // Update all changed products in the cart
      dispatch({ type: "UPDATE_PRODUCT", payload: updatedProducts });
      window.alert("Cart orders updated successfully");
    }
  };

  return (
    <div className="md:flex md:justify-end">
      <div className="min-w-[300px] pt-2 md:border-t-[1px] md:border-black">
        <h2 className="mb-2 text-2xl font-bold">Summary</h2>

        <div className="mb-4 space-y-2 border-y-[1px] border-gray-300 py-2 text-[0.833rem]">
          <p className="flex justify-between">
            <span>Sub-total ({cartOrders.length} items) </span>
            <span>Rs {formatCurrency(calculateTotalAmount())}</span>
          </p>

          <p className="flex justify-between">
            <span>Shipping</span>
            <span>$0</span>
          </p>
        </div>

        <p className="mb-6 flex justify-between">
          <span>Total Amount</span>
          <span>$$$</span>
        </p>

        <div className="space-x-4">
          <Button
            className="disabled:cursor-not-allowed"
            onClick={handleUpdateCart}
          >
            Update Cart
          </Button>

          <Button type="submit" variant="primary">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

type OrderSummaryProps = {
  cartOrders: ProductCardProps[];
  calculateTotalAmount: () => number;
};
