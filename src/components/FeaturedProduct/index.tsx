import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import Container from "../../common/Container";
import ProductCard from "../../common/ProductCard";
import products from "../../data/products";

const FeaturedProduct: React.FC = () => {
  const FEATURED_PRODUCTS = products.filter(
    (product) => product.isFeatured === true,
  );

  return (
    <section className="section-padding">
      <Container>
        <h2 className="section-title text-center">Featured Products</h2>

        <div className="-m-4 mb-1 flex flex-wrap">
          {FEATURED_PRODUCTS.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>

        <p>
          <NavLink className="flex items-center gap-2 underline" to="/shop">
            See More
            <span>
              <FaArrowRight />
            </span>
          </NavLink>
        </p>
      </Container>
    </section>
  );
};

export default FeaturedProduct;
