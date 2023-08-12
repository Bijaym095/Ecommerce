import { Link } from "react-router-dom";

export const BannerContent: React.FC<BannerContentProps> = ({
  linkTo,
  category,
}) => {
  return (
    <>
      <Link
        className="bg-white bg-opacity-80 px-4 py-2 font-medium uppercase hover:text-blue-700"
        to={linkTo}
      >
        {category}
      </Link>
    </>
  );
};

type BannerContentProps = {
  category: string;
  linkTo: string;
};
