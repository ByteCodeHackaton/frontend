import { FC } from "react";
import { Detail, RootInterface } from "./employees.types";
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

interface EmployeesListProps {
  options: RootInterface;
}

interface EmployeeCard {
  detail: Detail;
}

const EmployeeCard: FC<EmployeeCard> = ({ detail }) => {
  return (
    <Card>
      <CardBody>
        <HStack justifyContent="space-between">
          <Text>
            {detail.fio} {detail.rank}
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

const EmployeesList: FC<EmployeesListProps> = ({ options }) => {
  return (
    <Flex direction="column" gap={2}>
      {options.document.details.map((Employee) => (
        <EmployeeCard key={Employee.id.toString()} detail={Employee} />
      ))}
    </Flex>
  );
};

export { EmployeesList };
