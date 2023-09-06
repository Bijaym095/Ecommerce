import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

import RelatedProducts from "../components/RelatedProducts";
import Container from "../common/Container";
import { Button } from "../common/Button";
import { ProductCardProps } from "../common/ProductCard";
import products from "../data/products";
import { formatCurrency, getStarRating } from "../utils";
import useCartContext from "../hooks/useCartContext";
import useAuthContext from "../hooks/useAuthContext";

const SingleProduct: React.FC = () => {
  const [productQuantity, setProductQuantity] = useState<number>(1);

  const { id } = useParams();
  const { dispatch } = useCartContext();
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();

  const product = products.find((product) => product.id === id);

  const handleAddProduct = (newItem: ProductCardProps): void => {
    if (currentUser) {
      dispatch({ type: "ADD_PRODUCT", payload: newItem });
    } else {
      navigate("/signin");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <section>
        <Container>
          <h2 className="text-3xl">No Products found</h2>
        </Container>
      </section>
    );
  }

  return (
    <>
      <section className="overflow-hidden text-gray-600">
        <Container className="section-padding">
          <p className="mb-6 space-x-1">
            <NavLink
              className="md:duration-300 md:hover:text-secondary-500"
              to="/"
            >
              Home
            </NavLink>{" "}
            /{" "}
            <NavLink
              className="md:duration-300 md:hover:text-secondary-500"
              to={`/shop?category=${product.category.toLowerCase()}`}
            >
              {product.category}
            </NavLink>{" "}
            / <span>{product.title}</span>
          </p>

          <div className="mx-auto flex flex-wrap lg:w-4/5">
            <img
              src={product.imgSrc}
              alt={product.title}
              className="h-64 w-full rounded object-cover object-center lg:h-auto lg:w-1/2"
            />

            {/* ========== Content ============== */}
            <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
              <h5 className="text-sm tracking-widest text-gray-500">
                BRAND NAME
              </h5>

              <h4 className="mb-1 text-3xl font-medium text-gray-900">
                {product.title}
              </h4>

              <p className="mb-4 flex gap-1 text-secondary-400">
                {getStarRating(product.ratings)}
              </p>

              <p className="mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                officiis magnam maiores assumenda placeat quia neque. Ipsum,
                totam! Distinctio sapiente deserunt illo voluptas consectetur
                provident iste, sunt laborum possimus doloribus.
              </p>

              <p className="mb-4 text-2xl font-medium text-gray-900">
                Rs {formatCurrency(product.price)}
              </p>

              <div className="flex">
                <input
                  className="form-input w-[80px] rounded-xl"
                  type="number"
                  min="1"
                  onChange={(e) => setProductQuantity(parseInt(e.target.value))}
                  value={productQuantity}
                />

                <Button
                  disabled={productQuantity > 0 ? false : true}
                  onClick={() =>
                    handleAddProduct({ ...product, quantity: productQuantity })
                  }
                  variant="primary"
                  className="ml-4 disabled:cursor-not-allowed disabled:bg-primary-400"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
            {/* ========== Content ============== */}
          </div>
        </Container>
      </section>

      <RelatedProducts relatedProduct={product} />
    </>
  );
};

export default SingleProduct;
