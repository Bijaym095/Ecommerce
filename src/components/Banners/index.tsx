import BannerImage1 from "../../assets/images/banner-1.jpg";
import BannerImage2 from "../../assets/images/banner-2.jpeg";
import BannerImage3 from "../../assets/images/banner-3.jpg";
import BannerImage4 from "../../assets/images/banner-4.jpeg";
import BannerImage5 from "../../assets/images/banner-5.jpeg";
import Container from "../../common/Container";

import { BannerContent } from "./BannerContent";

const Banners: React.FC = () => {
  const BANNERS: Banner[] = [
    {
      thumbnailImageSrc: BannerImage1,
      containerStyles: "w-full shrink-0 px-4 md:w-6/12",
      category: "Women",
      linkTo: "/",
    },
    {
      thumbnailImageSrc: BannerImage2,
      containerStyles: "w-full shrink-0 px-4 md:w-6/12",
      category: "Men",
      linkTo: "/",
    },
    {
      thumbnailImageSrc: BannerImage3,
      containerStyles: "w-full shrink-0 px-4 md:w-4/12",
      category: "Watches",
      linkTo: "/",
    },
    {
      thumbnailImageSrc: BannerImage4,
      containerStyles: "w-full shrink-0 px-4 md:w-4/12",
      category: "Shoes",
      linkTo: "/",
    },
    {
      thumbnailImageSrc: BannerImage5,
      containerStyles: "w-full shrink-0 px-4 md:w-4/12",
      category: "Accessories",
      linkTo: "/",
    },
  ];

  const bannerContainerStyle =
    "relative z-0 mb-4 max-h-60 overflow-hidden after:absolute after:inset-0 after:bg-black after:bg-opacity-50";

  return (
    <section className="section-padding">
      <Container>
        {/* ========= wrapper ========== */}

        <div className="-mx-4 flex flex-wrap">
          {BANNERS.map((content, index) => (
            <article className={`${content.containerStyles}`} key={index}>
              <div className={`${bannerContainerStyle}`}>
                {/* ============ thumbnail ======== */}

                <picture>
                  <img src={content.thumbnailImageSrc} alt="" />
                </picture>

                {/* ============ thumbnail ======== */}

                <div className="absolute left-1/2 top-1/2 z-10 -translate-x-2/4 -translate-y-2/4">
                  <BannerContent
                    category={content.category}
                    linkTo={content.linkTo}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ========== wrapper ========== */}
      </Container>
    </section>
  );
};

export default Banners;

type Banner = {
  thumbnailImageSrc: string;
  containerStyles: string;
  category: string;
  linkTo: string;
};
