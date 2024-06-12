import { Box, Center, Divider, Heading, Spinner } from "@chakra-ui/react";
import { FC, useState } from "react";
import { PassangersList } from "~/entities/passengers/PassengersList.ui";
import { useGetPassengersQuery } from "~/entities/passengers/passengers.api";
import { Pagination } from "~/shared/components/pagination.ui";

interface PassengersPageProps {}

const PassengersPage: FC<PassengersPageProps> = () => {
  const [limit, setLimit] = useState(20);
  const [off, setOff] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isSuccess, isError, error } = useGetPassengersQuery({
    limit,
    off,
  });
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
        {isSuccess && (
          <Pagination
            limit={limit}
            off={off}
            setLimit={setLimit}
            setOff={setOff}
            pages={data.document.page_count}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </Box>
    </Center>
  );
};

export { PassengersPage };
