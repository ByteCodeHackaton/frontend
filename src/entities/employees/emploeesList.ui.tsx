import { FC } from "react";
import { Detail, RootInterface } from "./employees.types";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  StackDivider,
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
      <CardHeader>
        <Heading size="md">ID: {detail.id}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              fio
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.fio}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              date
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.date}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              phone_personal
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.phone_personal}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              phone_work
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.phone_work}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              rank
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.rank}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              sex
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.sex}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              smena
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.smena}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              tab_number
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.tab_number}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              time_work
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.time_work}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              type_work
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.type_work}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              uchastok
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.uchastok}
            </Text>
          </Box>

          <HStack>
            <EmployeesModal options={detail} />
            <EmployeesDeleteModal options={detail} />
          </HStack>
        </Stack>
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
