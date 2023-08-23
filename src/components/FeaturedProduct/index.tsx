import { uid } from "uid";

import ProductImage1 from "../../assets/images/banner-2.jpeg";
import Container from "../../common/Container";
import ProductCard, { ProductCardProps } from "../../common/ProductCard";

const FeaturedProduct: React.FC = () => {
  const FEATURED_PRODUCTS: ProductCardProps[] = [
    {
      id: uid(20),
      imgSrc: ProductImage1,
      title: "Summer Shirt",
      ratings: 4,
      price: 50,
      quantity: 1,
    },
    {
      id: uid(20),
      imgSrc:
        "https://static-01.daraz.com.np/p/6807267170d9623feb42ac09c517f23c.jpg_720x720.jpg_.webp",
      title: "Yeezy Slides",
      ratings: 5,
      price: 60,
      quantity: 1,
    },
    {
      id: uid(20),
      imgSrc:
        "https://static-01.daraz.com.np/p/451fd40d8b9ad565df95e141537c7342.jpg",
      title: "White T-shirt",
      ratings: 5,
      price: 20,
      quantity: 1,
    },
    {
      id: uid(20),
      imgSrc: "https://cdn.mos.cms.futurecdn.net/UeqCZzYknQfx5sBrkXBc4P.jpg",
      title: "Play Station 5",
      ratings: 5,
      price: 500,
      quantity: 1,
    },
    {
      id: uid(20),
      imgSrc:
        "https://images.pexels.com/photos/2105038/pexels-photo-2105038.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Guitar",
      ratings: 5,
      price: 40,
      quantity: 1,
    },
    {
      id: uid(20),
      imgSrc:
        "https://sportscenter.com.np/wp-content/uploads/2022/02/skate-board-furious-28.jpg",
      title: "Skateboard",
      ratings: 3,
      price: 45,
      quantity: 1,
    },
    {
      id: uid(20),
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0421/1929/9235/products/image_f0f87319-9357-44a4-a51e-e8739d95a86c_480x480.heic?v=1668344814",
      title: "Baseball Jacket",
      ratings: 4,
      price: 40,
      quantity: 1,
    },
  ];

  return (
    <section className="section-padding">
      <Container>
        <h2 className="section-title text-center">Featured Products</h2>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {FEATURED_PRODUCTS.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProduct;