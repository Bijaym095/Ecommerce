import { Button } from "../../common/Button";
import { ProductCardProps } from "../../common/ProductCard";
import { formatCurrency } from "../../utils";

const OrderSummary: React.FC<OrderSummaryProps> = ({
  orders,
  calculateTotalAmount,
}) => {
  return (
    <div className="md:flex md:justify-end">
      <form className="min-w-[300px] pt-2 md:border-t-[1px] md:border-black">
        <h2 className="mb-2 text-2xl font-bold">Summary</h2>

        <div className="mb-4 space-y-2 border-y-[1px] border-gray-300 py-2 text-[0.833rem]">
          <p className="flex justify-between">
            <span>Sub-total ({orders.length || 0} items) </span>
            <span className="">
              Rs {formatCurrency(calculateTotalAmount())}
            </span>
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
          <Button>Update Cart</Button>

          <Button type="submit" variant="primary">
            Proceed to Checkout
          </Button>
        </div>
      </form>
    </div>
  );
};

export default OrderSummary;

type OrderSummaryProps = {
  orders: ProductCardProps[];
  calculateTotalAmount: () => number;
};
