import { ButtonHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "font-medium transition-colors duration-300 text-base",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white",
        secondary:
          "bg-secondary-500 hover:bg-secondary-400 active:bg-secondary-600",
        default: "bg-white text-black",
      },
      size: {
        sm: "px-2 py-1",
        md: "px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

const Button: React.FC<ButtonProps> = ({
  className,
  size,
  variant,
  children,
  ...props
}) => {
  return (
    <button {...props} className={buttonVariants({ variant, size, className })}>
      {children}
    </button>
  );
};

export { buttonVariants, Button };

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
