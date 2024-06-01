import { FC } from "react";
import cls from "./OrderPage.module.scss";
import {
  Button,
  CheckBox,
  InputComponent,
  InputRadio,
  SearchInput,
} from "../../../shared";
import { TextArea } from "../../../shared/textarea/TextArea";

interface OrderPageProps {
  className?: string;
}

const OrderPage: FC<OrderPageProps> = () => {
  return (
    <>
      <h2 className={cls["h2-header"]}>Заявка на сопровождение</h2>
      <div className={cls.wrapper}>
        <div className={cls["col-one"]}>
          <InputComponent
            name="i1"
            placeholder="Представьтесь (ФИО)"
            alertText="Обязательное поле"
          />
          <InputComponent
            name="i2"
            type="tel"
            placeholder="Телефон"
            alertText="Введите верный телефон"
            inputMode="numeric"
          />
          <InputComponent
            name="i3"
            type="datetime-local"
            placeholder="Дата поездки"
            inputMode="none"
          />
          <p>Станция отправления</p>
          <SearchInput />
          <p>Станция прибытия</p>
          <SearchInput />
          <p>
            Выберите место встречи с инспектором службы на станции отправления:
          </p>
          <InputRadio
            options={[
              "у входных дверей",
              "у турникетов",
              "в вестибюле",
              "на платформе, в центре зала",
            ]}
          />
          <p>
            Для правильного подбора сопровождающего персонала укажите сведения о
            себе, которые Вы считаете необходимыми:
          </p>
          <TextArea />
          <CheckBox />
          <Button text="Отправить" />
        </div>
        <div className={cls["col-two"]}>
          <p>Как еще обратиться за помощью в ЦОМП?</p>
          <div className={cls["section-one"]}>
            <div className={cls["row"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="52"
                width="52"
                viewBox="0 0 520 520"
                fill="red"
              >
                <path d="m485 379-61-49a39 39 0 0 0-48-1l-52 38c-6 5-15 4-21-2l-78-70-70-78c-6-6-6-14-2-21l38-52c11-14 10-34-1-48l-49-61c-15-18-42-20-59-3L30 84c-8 8-12 19-12 30 5 102 51 199 119 267s165 114 267 119c11 1 22-4 30-12l52-52c19-15 18-43-1-57zm-65-134c12-17 19-38 19-60-1-58-48-105-106-105-22 0-43 7-60 19l-43-44c28-22 64-35 103-35 91 0 166 74 166 166 0 39-13 75-36 103z" />
                <circle cx="334" cy="184" r="45" />
              </svg>
              <div>
                <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
                  Телефоны поддержки
                </p>
                <p style={{ fontSize: "0.8rem", color: "red" }}>
                  +7 (495) 622-73-41
                </p>
                <p style={{ fontSize: "0.8rem", color: "red" }}>
                  +7 (800) 250-73-41
                </p>
                <p style={{ fontSize: "1rem", marginTop: "2rem" }}>
                  Оставить заявку в мобильном приложении «Метро Москвы»
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { OrderPage };
