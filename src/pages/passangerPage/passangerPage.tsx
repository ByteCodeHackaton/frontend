import { Box, Center, Divider, Heading, Spinner, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { useGetPassengerQuery } from "~/entities/passengers/passengers.api";

interface PassengerPageProps {}

const PassengerPage: FC<PassengerPageProps> = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess, isError, error } =
    useGetPassengerQuery(id);
  return (
    <>
      {isSuccess && (
        <Center w="100vw">
          <Box
            p={4}
            margin={16}
            w="100%"
            borderRadius="lg"
            border="1px solid #EDF2F7"
            boxShadow="0 0 1em rgb(1 1 1 / 10%)"
          >
            <Heading size="md" mb={4}>
              {data.fio}
            </Heading>
            <Divider orientation="horizontal" />
            <Heading size="sm" mb={4}>
              <Text>{data.id}</Text>
            </Heading>
            <Heading size="sm" mb={4}>
              <Text>{data.phone}</Text>
            </Heading>
            <Heading size="sm" mb={4}>
              <Text>{data.sex}</Text>
            </Heading>
            <Heading size="sm" mb={4}>
              <Text>{data.category}</Text>
            </Heading>
            <Heading size="sm" mb={4}>
              <Text>{data.description}</Text>
            </Heading>
            <Heading size="sm" mb={4}>
              <Text>{data.eks}</Text>
            </Heading>
          </Box>
        </Center>
      )}
      {isLoading && <Spinner color="red.500" />}{" "}
    </>
  );
};

export { PassengerPage };
