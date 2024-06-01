import { FC } from "react";
import cls from "./SearchInput.module.scss";

interface SearchInputProps {
  className?: string;
}

const SearchInput: FC<SearchInputProps> = () => {
  return (
    <div>
      <input placeholder="Введите название станции" />
    </div>
  );
};

export { SearchInput };
