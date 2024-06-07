import { FC } from "react";
import { Detail, RootInterface } from "./types";
import {
  Card,
  CardBody,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { AiOutlineForm } from "react-icons/ai";

interface PassangersListProps {
  options: RootInterface;
}

interface PassangerCard {
  detail: Detail;
}

const PassangerCard: FC<PassangerCard> = ({ detail }) => {
  return (
    <Card>
      <CardBody>
        <HStack justifyContent="space-between">
          <Text>
            {detail.fio} {detail.phone}
          </Text>
          <IconButton
            aria-label="Passenger info"
            icon={<Icon as={AiOutlineForm} color="white" h={8} w={8} />}
            colorScheme="red"
          />
        </HStack>
      </CardBody>
    </Card>
  );
};

const PassangersList: FC<PassangersListProps> = ({ options }) => {
  return (
    <Flex direction="column" gap={2}>
      {options.document.details.map((passanger) => (
        <PassangerCard key={passanger.id.toString()} detail={passanger} />
      ))}
    </Flex>
  );
};

export { PassangersList };
