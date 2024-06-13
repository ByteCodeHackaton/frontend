import { FC } from "react";

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
