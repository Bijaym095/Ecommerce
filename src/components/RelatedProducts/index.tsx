import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import Container from "../../common/Container";
import ProductCard, { ProductCardProps } from "../../common/ProductCard";
import products from "../../data/products";

const RelatedProducts: React.FC<RelatedProductsProps> = ({
  relatedProduct,
}) => {
  // Create a state to hold the related products
  const [relatedProducts, setRelatedProducts] = useState<ProductCardProps[]>(
    [],
  );

  useEffect(() => {
    // Filter related products based on category, excluding the relatedProduct itself
    const filteredProducts = products.filter(
      (product) =>
        product.id !== relatedProduct.id &&
        product.category === relatedProduct.category,
    );
    setRelatedProducts(filteredProducts.slice(0, 4));

    window.scrollTo(0, 0);
  }, [relatedProduct]);

  return (
    <section>
      <Container className="section-padding">
        <h2 className="section-title">Related Products</h2>

        <div className="flex flex-wrap">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <p className="text-end">
          <NavLink
            className="flex items-center justify-end gap-2 underline"
            to="/shop"
          >
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

type RelatedProductsProps = {
  relatedProduct: ProductCardProps;
};

export default RelatedProducts;
