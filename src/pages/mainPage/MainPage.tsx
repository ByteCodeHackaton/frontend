import { FC, useState } from "react";
import { Box, Center, Heading, Divider, Spinner } from "@chakra-ui/react";
import { useGetOrdersQuery } from "~/entities/orders/orders.api";
import { OrdersList } from "~/entities/orders/ordersList";
import { Pagination } from "~/shared/components/pagination.ui";

interface MainPageProps {
  className?: string;
}

const MainPage: FC<MainPageProps> = () => {
  const [limit, setLimit] = useState(20);
  const [off, setOff] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isSuccess, isError, error } = useGetOrdersQuery({
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
          Заявки
        </Heading>
        <Divider orientation="horizontal" />
        {isLoading && <Spinner color="red.500" />}{" "}
        {isSuccess && <OrdersList options={data} />}
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

export { MainPage };
