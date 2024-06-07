import { FC } from "react";
import { OrderForm } from "~/entities/orders";

interface OrderPageProps {
  className?: string;
}

const OrderPage: FC<OrderPageProps> = () => {
  return <OrderForm />;
};

export { OrderPage };
