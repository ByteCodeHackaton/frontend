import { FC } from "react";
import { classNames } from "shared/lib/helpers/className/className";
import cls from "./TextArea.module.scss";

interface TextAreaProps {
  className?: string;
}

const TextArea: FC<TextAreaProps> = () => {
  return (
    <textarea placeholder="Расскажите о себе (максимум 500 символов)"></textarea>
  );
};

export { TextArea };
