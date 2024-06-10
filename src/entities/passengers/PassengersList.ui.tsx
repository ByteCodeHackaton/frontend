import { FC } from "react";
import { Detail, RootInterface } from "./types";
import { Card, CardBody, Flex, HStack, Text } from "@chakra-ui/react";
import { PassengersModal } from "./passengers.modal";
import { PassengersDeleteModal } from "./passengersClose.modal";

interface PassangersListProps {
  options: RootInterface;
}

interface PassangerCard {
  detail: Detail;
}

export const PassangerCard: FC<PassangerCard> = ({ detail }) => {
  return (
    <Card>
      <CardBody>
        <HStack justifyContent="space-between">
          <Text>
            {detail.fio} {detail.phone}
          </Text>
          <HStack>
            <PassengersModal options={detail} />
            <PassengersDeleteModal options={detail} />
          </HStack>
        </HStack>
      </CardBody>
    </Card>
  );
};

const PassangersList: FC<PassangersListProps> = ({ options }) => {
  return (
    <Flex direction="column" gap={2}>
      {options.document.details.map((item) => (
        <PassangerCard key={item.id.toString()} detail={item} />
      ))}
    </Flex>
  );
};

export { PassangersList };
