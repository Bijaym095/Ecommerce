import clsx from "clsx";

export const combineClasses = (...classes: (string | undefined)[]): string =>
  clsx(classes);
