import { NavLink } from "react-router-dom";

import { register } from "swiper/element/bundle";

import HeroBg1 from "../../assets/images/hero-bg1.jpg";
import HeroBg2 from "../../assets/images/hero-bg2.jpg";
import Container from "../../common/Container";
import { buttonVariants } from "../../common/Button";

register();

const Hero: React.FC = () => {
  const HERO_SLIDES: HeroSlide[] = [
    {
      title: "Spring / Summer Collection 2023",
      main_title: "Get up to 30% off New Arrivals",
      imgSrc: HeroBg1,
    },
    {
      title: "Spring / Summer Collection 2023",
      main_title: "Get up to 30% off New Arrivals",
      imgSrc: HeroBg2,
    },
  ];

  return (
    <section>
      <swiper-container
        navigation="true"
        slides-per-view="1"
        loop="true"
        speed="300"
        pagination="true"
        autoplay="true"
      >
        {HERO_SLIDES.map((slide, index) => (
          <swiper-slide key={index}>
            <div
              className="h-[600px]  bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.imgSrc})`,
              }}
            >
              <Container className="section-padding flex h-full flex-col justify-center">
                <div>
                  <h1 className="mb-8 text-4xl font-bold">
                    <span className="text-base font-normal uppercase">
                      {slide.title}
                    </span>
                    <br />
                    {slide.main_title}
                  </h1>

                  <NavLink
                    type="button"
                    role="button"
                    className={buttonVariants({ variant: "primary" })}
                    to="/"
                  >
                    Shop Now
                  </NavLink>
                </div>
              </Container>
            </div>

          </swiper-slide>
        ))}
      </swiper-container>
    </section>
  );
};

export default Hero;

type HeroSlide = {
  title: string;
  main_title: string;
  imgSrc: string;
};
