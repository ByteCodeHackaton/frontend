import { Center, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { EmployeesForm } from "~/entities/employees/employeesForm";

const EmployeeReistrationPage: FC = () => {
  return (
    <>
      <Center>
        <Heading size="md" mt={24}>
          Регистрация сотрудника
        </Heading>
      </Center>
      <EmployeesForm />
    </>
  );
};

export { EmployeeReistrationPage };
