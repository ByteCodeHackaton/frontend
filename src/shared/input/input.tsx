import { FC, useEffect, useMemo, useRef, useState } from "react";
import cls from "./input.module.scss";

interface inputProps {
  placeholder?: string;
  name: string;
  alertText?: string;
  type?: string;
  inputMode?: string;
}

const InputComponent: FC<inputProps> = ({
  placeholder,
  name,
  alertText,
  type,
  inputMode,
}) => {
  const truePositions = [5, 6, 7, 10, 11, 12, 14, 15, 17, 18];
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const input_props = useRef({});
  const blurStyles = { label: {}, input: {} };
  const focusStyles = useMemo(
    () => ({
      label: {
        top: "-11px",
        fontSize: "14px",
        background: "#fff",
      },
      input: { outline: "none" },
    }),
    []
  );
  const [styles, setStyles] = useState(blurStyles);
  const [value, setValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [cursor, setCursor] = useState<number | null>(null);
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputMode === "numeric") {
      input_props.current = {
        inputMode: "numeric",
      };
    }
    if (inputMode === "none") {
      input_props.current = {
        inputMode: "none",
      };
    }
    if (type === "datetime-local") setStyles(focusStyles);
  }, [inputMode, focusStyles, type]);

  const onFocus = () => {
    if (inputMode === "numeric" && value.length === 0)
      setValue("+7 (___) ___-__-__");
    setStyles(focusStyles);
  };

  const onBlur = () => {
    if (
      (value.length === 0 ||
        (value === "+7 (___) ___-__-__" && inputMode === "numeric")) &&
      type !== "datetime-local"
    ) {
      setStyles(blurStyles);
      setIsEmpty(true);
      setValue("");
    }
  };

  const onChange = (e: string) => {
    setValue(e);
    setIsEmpty(false);
  };

  useEffect(() => {
    if (type !== "datetime-local")
      ref.current?.setSelectionRange(cursor, cursor);
  }, [ref, cursor, value, type]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputMode === "numeric") {
      const pos = Number(e.target.selectionStart);
      const val = e.target.value;
      if (truePositions.includes(pos) && digits.includes(Number(val[pos - 1])))
        onChange(value.slice(0, pos - 1) + val[pos - 1] + value.slice(pos));
    } else {
      onChange?.(e.target.value);
    }
    setCursor(e.target.selectionStart);
  };

  return (
    <div className={cls.wrapper}>
      <label htmlFor={name} style={styles.label}>
        {placeholder ? placeholder : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type ? type : "text"}
        style={styles.input}
        onFocus={() => {
          onFocus();
        }}
        onBlur={() => {
          onBlur();
        }}
        onChange={handleChange}
        value={value}
        ref={ref}
        {...input_props}
      ></input>
      {isEmpty && <span>{alertText}</span>}
    </div>
  );
};

export { InputComponent };
