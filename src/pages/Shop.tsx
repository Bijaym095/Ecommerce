import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaFilter, FaTimes } from "react-icons/fa";

import Container from "../common/Container";
import { Button } from "../common/Button";
import { ProductCardProps } from "../common/ProductCard";
import products from "../data/products";
import { formatCurrency, getStarRating } from "../utils";

const Shop = () => {
  const [shopProducts, setShopProducts] = useState<ProductCardProps[]>([]);
  const [toggleFilter, setToggleFilter] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    let filteredProducts = products;

    switch (location.search) {
      case "?category=men":
        filteredProducts = products.filter(
          (product) => product.category === "Men",
        );
        break;
      case "?category=women":
        filteredProducts = products.filter(
          (product) => product.category === "Women",
        );
        break;
      case "?category=shoes":
        filteredProducts = products.filter(
          (product) => product.category === "Shoes",
        );
        break;
      case "?category=watches":
        filteredProducts = products.filter(
          (product) => product.category === "Watches",
        );
        break;
      case "?category=accessories":
        filteredProducts = products.filter(
          (product) => product.category === "Accessories",
        );
        break;
      default:
        // No specific category selected, use all products
        break;
    }

    setShopProducts(filteredProducts);
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container className="grid h-[100px] place-items-center text-center font-bold">
        <h2 className="text-3xl">Products</h2>
      </Container>

      <section>
        <Container className="section-padding">
          <Button
            className="mb-6 flex items-center gap-2 bg-slate-300 hover:bg-slate-200 lg:hidden"
            onClick={() => setToggleFilter(true)}
          >
            <FaFilter />
            Filter
          </Button>

          {/* =============== wrapper ============= */}

          <div className="lg:flex">
            <aside
              className={`fixed -left-[250px] top-0 z-[100] h-full w-[250px] bg-white px-6 py-10 transition-all duration-300 ease-in lg:static lg:z-0 ${
                toggleFilter
                  ? "left-0"
                  : "p-4 lg:block lg:w-3/12 lg:place-self-start"
              }`}
            >
              <Button
                className="absolute right-4 top-4 bg-slate-300 hover:bg-slate-200 lg:hidden"
                onClick={() => setToggleFilter(false)}
              >
                <FaTimes />
              </Button>

              <h4 className="mb-4 font-bold">Category</h4>

              <ul className="space-y-4">
                <li>
                  <NavLink to="/shop">All</NavLink>
                </li>
                <li>
                  <Link to="/shop?category=men">Men</Link>
                </li>
                <li>
                  <Link to="/shop?category=women">Women</Link>
                </li>
                <li>
                  <Link to="/shop?category=shoes">Shoes</Link>
                </li>
                <li>
                  <Link to="/shop?category=watches">Watches</Link>
                </li>
                <li>
                  <Link to="/shop?category=accessories">Accessories</Link>
                </li>
              </ul>
            </aside>

            <main className="sm:grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3 lg:ml-auto lg:w-8/12">
              {shopProducts.map((product) => (
                <div className="w-full" key={product.id}>
                  <Link
                    to={`/product/${product.id}`}
                    className="relative block h-48 overflow-hidden rounded"
                  >
                    <img
                      className="block h-full w-full object-cover object-center"
                      src={product.imgSrc}
                      alt={product.title}
                    />
                  </Link>

                  <div className="mt-4">
                    <h3 className="mb-1 text-sm uppercase tracking-widest text-gray-500">
                      {product.category}
                    </h3>

                    <h2 className="title-font mb-1 text-xl font-medium text-gray-900">
                      <Link
                        className="md:duration-300 md:hover:text-secondary-400"
                        to={`/product/${product.id}`}
                      >
                        {product.title}
                      </Link>
                    </h2>

                    <p className="mb-4">Rs {formatCurrency(product.price)}</p>

                    <p className="mb-4 flex gap-1 text-secondary-400">
                      {getStarRating(product.ratings)}
                    </p>
                  </div>
                </div>
              ))}
            </main>
          </div>

          {/* =============== wrapper ============= */}
        </Container>
      </section>
    </>
  );
};

export default Shop;
