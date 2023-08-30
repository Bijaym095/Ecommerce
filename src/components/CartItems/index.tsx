import { Link } from "react-router-dom";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

import { ProductCardProps } from "../../common/ProductCard";
import { Button } from "../../common/Button";
import { formatCurrency } from "../../utils";

const CartItems: React.FC<CartItemsProps> = ({ orders }) => {
  return (
    <div className="mb-2 p-4">
      <h2 className="mb-4 text-2xl font-bold">Cart Orders</h2>

      {/* =========== orders-wrapper ======== */}
      <div className="space-y-6">
        {orders.map((order) => (
          <div className="md:flex md:gap-4" key={order.id}>
            <Link className="mb-2 block" to={`/product/${order.id}`}>
              <picture>
                <img
                  className="h-[250px] w-full rounded-lg object-cover md:h-[80px] md:w-[80px]"
                  src={order.imgSrc}
                  alt={order.title}
                />
              </picture>
            </Link>

            {/* ====== order-content ========= */}
            <div className="md:ml-auto md:flex md:w-full md:items-center md:justify-between">
              <h4 className="mb-4 font-medium text-gray-900 md:w-4/12 md:self-start">
                <Link to={`/product/${order.id}`}>{order.title}</Link>
              </h4>

              <p className="mb-2 md:w-2/12">Rs {formatCurrency(order.price)}</p>

              {/*====== quantity-counter ======= */}
              <div className="mb-2 space-x-4 md:w-2/12">
                <button>
                  <FaPlus />
                </button>

                <span>{order.quantity}</span>

                <button>
                  <FaMinus />
                </button>
              </div>
              {/*====== quantity-counter ======= */}

              <div className="md:w-2/12">
                <Button className="md:hidden">Remove Item</Button>

                <Button className="hidden bg-red-400 md:block">
                  <FaTrash />
                </Button>
              </div>
            </div>
            {/* ====== order-content ========= */}
          </div>
        ))}
      </div>
      {/* =========== orders-wrapper ======== */}
    </div>
  );
};

export default CartItems;

type CartItemsProps = {
  orders: ProductCardProps[];
};
