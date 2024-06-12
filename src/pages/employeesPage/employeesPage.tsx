import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Heading,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight, SlArrowUp } from "react-icons/sl";
import { EmployeesList } from "~/entities/employees/emploeesList.ui";
import { useGetEmployeesQuery } from "~/entities/employees/employees.api";
import { Pagination } from "~/shared/components/pagination.ui";

interface EmployeesPageProps {}

const EmployeesPage: FC<EmployeesPageProps> = () => {
  const [limit, setLimit] = useState(20);
  const [off, setOff] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isSuccess, isError, error } = useGetEmployeesQuery({
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
          Сотрудники
        </Heading>
        <Divider orientation="horizontal" />
        {isLoading && <Spinner color="red.500" />}{" "}
        {isSuccess && <EmployeesList options={data} />}
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

export { EmployeesPage };
