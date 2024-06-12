import { Center, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { OrderForm } from "~/entities/orders";

interface OrderPageProps {
  className?: string;
}

const OrderPage: FC<OrderPageProps> = () => {
  return (
    <>
      <Center>
        <Heading size="md" mt={24}>
          Регистрация заявки
        </Heading>
      </Center>
      <OrderForm />
    </>
  );
};

export { OrderPage };
