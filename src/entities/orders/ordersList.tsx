import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  HStack,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
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
      <CardHeader>
        <Heading size="md">id: {detail.id}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              cat_pas
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.cat_pas}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              datetime
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.datetime}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              id_pas
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.id_pas}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              id_st1
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.id_st1}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              id_st2
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.id_st2}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              insp_sex_f
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.insp_sex_f}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              insp_sex_m
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.insp_sex_m}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              status
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.status}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              time3
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.time3}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              time4
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.time4}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              time_over
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.time_over}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              tpz
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.tpz}
            </Text>
          </Box>
          <HStack>
            <OrdersModal options={detail} />
            <OrdersDeleteModal options={detail} />
          </HStack>
        </Stack>
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
