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
import { EmployeesModal } from "./employees.modal";
import { EmployeesDeleteModal } from "./employeesClose.modal";

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
          <HStack>
            <EmployeesModal options={detail} />
            <EmployeesDeleteModal options={detail} />
          </HStack>
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
