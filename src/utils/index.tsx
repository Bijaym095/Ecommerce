import clsx from "clsx";
import { AiFillStar } from "react-icons/ai";

export const combineClasses = (...classes: (string | undefined)[]): string =>
  clsx(classes);

export const getStarRating = (rating: number) => {
  let stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<AiFillStar key={i} />);
  }

  return stars;
};

export const formatCurrency = (price: number) => {
  const formatter = new Intl.NumberFormat("ne-NP", {
    style: "currency",
    currency: "NPR",
    maximumFractionDigits: 0,
  }).format(price);

  return formatter.slice(formatter.indexOf("R") + 2);
};
