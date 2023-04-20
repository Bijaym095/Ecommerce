interface ContainerInterface {
  className?: string;
  children: React.ReactNode | string;
}

const Container: React.FC<ContainerInterface> = ({ className, children }) => {
  return (
    <div className={`container ${className ? className : ""}`}>{children}</div>
  );
};

export default Container;
