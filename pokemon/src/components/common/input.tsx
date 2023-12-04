import React, { FunctionComponent } from "react";
import { cn } from "../../utils";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  onTextChange: (text: string) => void;
  value: string;
}

const Input: FunctionComponent<InputProps> = ({
  className,
  onTextChange,
  value,
  ...props
}) => {
  return (
    <div className={cn("w-full h-full px-3 py-2 bg-white", className)}>
      <input
        className="w-full h-full bg-transparent outline-none border-none placeholder:text-gray-500 "
        value={value}
        onChange={(e) => onTextChange(e.target.value)}
        {...props}
      />
    </div>
  );
};

export default Input;
