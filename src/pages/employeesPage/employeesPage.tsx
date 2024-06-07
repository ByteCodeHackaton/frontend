import { Box, Center, Divider, Heading, Spinner } from "@chakra-ui/react";
import { FC } from "react";
import { EmployeesList } from "~/entities/employees/emploeesList.ui";
import { useGetEmployeesQuery } from "~/entities/employees/employees.api";

interface EmployeesPageProps {}

const EmployeesPage: FC<EmployeesPageProps> = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetEmployeesQuery();
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
      </Box>
    </Center>
  );
};

export { EmployeesPage };
