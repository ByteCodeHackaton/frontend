import { Box, Center, Divider, Heading, Spinner } from "@chakra-ui/react";
import { FC } from "react";
import { PassangersList } from "~/entities/passengers/PassengersList.ui";
import { useGetPassengersQuery } from "~/entities/passengers/passengers.api";

interface PassengersPageProps {}

const PassengersPage: FC<PassengersPageProps> = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetPassengersQuery();
  return (
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
          Пассажиры
        </Heading>
        <Divider orientation="horizontal" />
        {isLoading && <Spinner color="red.500" />}{" "}
        {isSuccess && <PassangersList options={data} />}
      </Box>
    </Center>
  );
};

export { PassengersPage };
