import { FC } from "react";
import { classNames } from "shared/lib/helpers/className/className";
import cls from "./Button.module.scss";

interface ButtonProps {
  className?: string;
  text: string;
}

const Button: FC<ButtonProps> = ({ text }) => {
  return <button>{text}</button>;
};

export { Button };
