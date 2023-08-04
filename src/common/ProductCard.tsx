import { useNavigate, Link } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";

import useAuthContext from "../hooks/useAuthContext";
import useCartContext from "../hooks/useCartContext";

export interface ProductCardInterface {
  imgSrc: string;
  title: string;
  ratings: 1 | 2 | 3 | 4 | 5;
  price: number;
  quantity?: number;
}

interface ProductCardPropsInterface {
  details: ProductCardInterface;
}

const ProductCard: React.FC<ProductCardPropsInterface> = ({ details }) => {
  const navigate = useNavigate();

  const { user } = useAuthContext();
  const { cartItems, setCartItems } = useCartContext();

  const getStarsByNumber = (count: number) => {
    let stars = [];

    for (let i = 0; i < count; i++) {
      stars.push(<AiFillStar key={i} />);
    }

    return stars;
  };

  //* Handling Addtocart function in case user is logged in or not
  const handleAddProductCard = (newItem: ProductCardInterface): void => {
    if (user) {
      //  Checking if the cartItems exist or not
      const existingItems = cartItems.find((item) => {
        return (
          item.imgSrc === newItem.imgSrc &&
          item.title === newItem.title &&
          item.ratings === newItem.ratings &&
          item.price === newItem.price
        );
      });

      if (existingItems) {
        // If the items already exist, increase its quantity
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item === existingItems
              ? { ...item, quantity: (item.quantity ?? 0) + 1 } // if item.quantity is "undefined", then quantity of the item is set to be 0
              : item
          )
        );
      } else {
        // If the item doesn't exist then add it to the cart with quantity of 1
        setCartItems((prevItems) => [
          ...prevItems,
          { ...newItem, quantity: 1 },
        ]);
      }
    } else {
      // Navigating to the signin page if the user is not logged in

      navigate("signin");
    }
  };

  return (
    <article className="mb-6 rounded-lg border border-gray-400 p-6 duration-300 hover:shadow-lg">
      <div className="mb-2">
        <picture>
          <img
            className="h-44 w-full object-cover"
            src={details.imgSrc}
            alt=""
          />
        </picture>
      </div>

      <h4 className="font-bold hover:text-blue-700">
        <Link className="text-[1.2rem]" to="/">
          {details.title}
        </Link>
      </h4>

      <h5 className="mb-2 font-medium text-orange-500">$ {details.price}</h5>

      <div className="flex items-center justify-between gap-4">
        <span className="flex space-x-1 text-yellow-400">
          {getStarsByNumber(details.ratings)}
        </span>

        <button
          className="rounded-lg bg-blue-400 px-4 py-2 font-medium text-white hover:bg-blue-500 active:bg-blue-700"
          onClick={() => handleAddProductCard(details)}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
