import { FC } from "react";
import { Detail, RootInterface } from "./types";
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
              category
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.category}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              description
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.description}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              eks
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.eks}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              phone
            </Heading>
            <Text pt="2" fontSize="sm">
              {detail.phone}
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
          <HStack>
            <PassengersModal options={detail} />
            <PassengersDeleteModal options={detail} />
          </HStack>
        </Stack>
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
