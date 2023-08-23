import { useNavigate, Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

import useAuthContext from "../../hooks/useAuthContext";
import useCartContext from "../../hooks/useCartContext";
import useAddProduct from "../../hooks/useAddProduct";

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imgSrc,
  title,
  ratings,
  price,
}) => {
  const navigate = useNavigate();

  const { currentUser } = useAuthContext();
  const { dispatch } = useCartContext();
  const { addProductToFirestore } = useAddProduct();

  const productDetails = {
    id,
    imgSrc,
    title,
    ratings,
    price,
    quantity: 1,
  };

  const getStarsByNumber = (count: number) => {
    let stars = [];

    for (let i = 0; i < count; i++) {
      stars.push(<AiFillStar key={i} />);
    }

    return stars;
  };

  const handleAddProductCard = (newItem: ProductCardProps): void => {
    if (currentUser) {
      addProductToFirestore(newItem);
      dispatch({ type: "ADD_PRODUCT", payload: newItem });
    } else {
      navigate("/signin");
    }
  };

  return (
    <div key={id} className="mb-6 border border-primary-500 p-4">
      <header>
        <picture>
          <img className="h-44 w-full object-cover" src={imgSrc} alt="" />
        </picture>
      </header>

      <main className="p-2">
        <h4 className="hover:text-secondary font-bold">
          <Link className="text-[1.2rem]" to="/">
            {title}
          </Link>
        </h4>

        <h5 className="mb-2 font-medium text-orange-500">$ {price}</h5>

        <p className="mb-2 flex space-x-1 text-yellow-400">
          {getStarsByNumber(ratings)}
        </p>
      </main>

      <footer>
        <button
          className="block w-full bg-primary-400 py-2 text-center font-medium text-white transition-colors duration-300 hover:bg-primary-500"
          onClick={() => handleAddProductCard(productDetails)}
        >
          Add to Cart
        </button>
      </footer>
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
};
