import { FunctionComponent } from "react";
import { cn } from "../../utils";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      className={cn(
        `bg-black hover:bg-black/80 text-white font-bold py-2 px-4  ${className}`
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
