import { FC } from "react";
import { classNames } from "shared/lib/helpers/className/className";
import cls from "./CheckBox.module.scss";

interface CheckBoxProps {
  className?: string;
}

const CheckBox: FC<CheckBoxProps> = () => {
  return (
    <label>
      <input type="checkbox" />
      <span>
        Я ознакомлен(а) с порядком предоставления услуг и согласен(а) на
        обработку персональных данных
      </span>
    </label>
  );
};

export { CheckBox };
