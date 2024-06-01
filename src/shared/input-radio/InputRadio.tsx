import { FC } from "react";
import cls from "./InputRadio.module.scss";

interface InputRadioProps {
  className?: string;
  options: Array<string>;
}

const InputRadio: FC<InputRadioProps> = ({ options }) => {
  return (
    <>
      {options.map((item, index) => (
        <div>
          <input
            type="radio"
            id={item}
            name="drone"
            value={item}
            checked={index === 0 ? true : false}
          />
          <label htmlFor={item}>{item}</label>
        </div>
      ))}
    </>
  );
};

export { InputRadio };
