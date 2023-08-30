import { Link } from "react-router-dom";

import { formatCurrency, getStarRating } from "../../utils";

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imgSrc,
  title,
  ratings,
  price,
  category,
}) => {
  return (
    <div className="h-full w-full p-4 md:w-1/2 lg:w-1/4">
      <Link
        to={`/product/${id}`}
        className="relative block h-48 overflow-hidden rounded"
      >
        <picture>
          <img
            className="block h-full w-full object-cover object-center"
            src={imgSrc}
            alt={title}
          />
        </picture>
      </Link>

      <div className="mt-4">
        <h3 className="mb-1 text-sm uppercase tracking-widest text-gray-500">
          {category}
        </h3>

        <h2 className="mb-1 text-xl font-medium text-gray-900">
          <Link
            className="md:duration-300 md:hover:text-secondary-400"
            to={`/product/${id}`}
          >
            {title}
          </Link>
        </h2>

        <p className="mb-4">Rs {formatCurrency(price)}</p>

        <p className="mb-4 flex gap-1 text-secondary-400">
          {getStarRating(ratings)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

export type ProductCardProps = {
  id: string;
  imgSrc: string;
  title: string;
  ratings: 1 | 2 | 3 | 4 | 5;
  price: number;
  quantity: number;
  category: "Men" | "Women" | "Accessories" | "Shoes" | "Watches";
  isFeatured: boolean;
};
