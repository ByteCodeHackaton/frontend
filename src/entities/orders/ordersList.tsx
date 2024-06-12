import { Card, CardBody, Flex, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Detail, RootInterface } from "./orders.types";
import { OrdersModal } from "./orders.modal";
import { OrdersDeleteModal } from "./ordersClose.modal";

interface OrdersListProps {
  options: RootInterface;
}

interface OrdersCardProps {
  detail: Detail;
}

const OrdersCard: FC<OrdersCardProps> = ({ detail }) => {
  return (
    <Card>
      <CardBody>
        <HStack justifyContent="space-between">
          <Text>
            {detail.id_st1}-{detail.id_st2}
          </Text>
          <HStack>
            <OrdersModal options={detail} />
            <OrdersDeleteModal options={detail} />
          </HStack>
        </HStack>
      </CardBody>
    </Card>
  );
};

const OrdersList: FC<OrdersListProps> = ({ options }) => {
  return (
    <Flex direction="column" gap={2}>
      {options.document.details.map((order) => (
        <OrdersCard
          key={order.id ? order.id.toString() : undefined}
          detail={order}
        />
      ))}
    </Flex>
  );
};

export { OrdersList };
