import { FC, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";

import AuthContext from "../context/Auth/AuthContext";

export interface ProductCardDataInterface {
  imgSrc: string;
  title: string;
  ratings: 1 | 2 | 3 | 4 | 5;
  price: number;
}

interface ProductCardInterface {
  details: ProductCardDataInterface;
}

const ProductCard: FC<ProductCardInterface> = ({ details }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleAddProductCard = () => {
    if (user) {
      console.log(user);
    } else {
      navigate("signin");
    }
  };

  const getStars = (num: number) => {
    let stars = [];
    for (let i = 0; i < num; i++) {
      stars.push(<AiFillStar key={i} />);
    }
    return stars;
  };

  return (
    <article className="mb-6 rounded-lg bg-gray-200 p-6 duration-300 hover:shadow-lg">
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
          {getStars(details.ratings)}
        </span>

        <button
          className="rounded-lg bg-blue-400 px-4 py-2 font-medium text-white hover:bg-blue-500"
          onClick={handleAddProductCard}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
