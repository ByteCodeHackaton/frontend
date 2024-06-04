import { FC } from "react";

interface ButtonProps {
  className?: string;
  text: string;
}

const Button: FC<ButtonProps> = ({ text }) => {
  return <button>{text}</button>;
};

export { Button };
