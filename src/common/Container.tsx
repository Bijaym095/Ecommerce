import { FC } from "react";
import { ReactNode } from "react";

interface ContainerInterface {
  className?: string;
  children: ReactNode | string;
}

const Container: FC<ContainerInterface> = ({ className, children }) => {
  return (
    <div className={`container ${className ? className : ""}`}>{children}</div>
  );
};

export default Container;
