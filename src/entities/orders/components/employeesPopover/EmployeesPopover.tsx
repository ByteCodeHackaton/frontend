import {
  Button,
  Card,
  CardBody,
  Center,
  FormControl,
  Input,
  List,
  ListIcon,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Select,
  useControllableState,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import { useGetEmployeesQuery } from "~/entities/employees/employees.api";
import { useLazySetActiveQuery } from "../../orders.api";
import { Detail } from "~/entities/employees/employees.types";

const Form = ({
  onCancel,
  setEmployees,
  employees,
}: {
  onCancel: () => void;
  setEmployees: React.Dispatch<React.SetStateAction<string[]>>;
  employees: string[];
}) => {
  const { data, isLoading, isSuccess, isError, error } = useGetEmployeesQuery({
    limit: 5,
    off: 0,
  });
  const [
    sendPathRequest,
    { data: dataPath, isSuccess: isSuccessPath, isFetching: isFetchingPath },
  ] = useLazySetActiveQuery();
  const onAddEmployee = (e: Detail) => {
    sendPathRequest({
      fio: e.id,
      id: e.id,
      employees_count: 1,
      note: "",
      path_from: "",
      path_to: "",
      request_date: "",
    });
  };

  return (
    <PopoverBody>
      {
        <Select>
          {data.document.details.map((obj) => (
            <option value={obj.fio} onClick={() => onAddEmployee(obj)}>
              {obj.fio}
            </option>
          ))}
        </Select>
      }
      <Center height="12px" />
      <Button
        colorScheme="red"
        mt={4}
        onClick={() => {
          onCancel();
          setEmployees([...employees, "some employee"]);
        }}
      >
        Сохранить
      </Button>
    </PopoverBody>
  );
};

const EmployeePopoverForm = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [employees, setEmployees] = useControllableState<string[]>({
    defaultValue: [],
  });

  return (
    <>
      <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        placement="right"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Button colorScheme="red">Добавить сотрудника</Button>
        </PopoverTrigger>
        <PopoverContent p={5}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Добавление сотрудника</PopoverHeader>

          <Form
            employees={employees}
            setEmployees={setEmployees}
            onCancel={onClose}
          />
        </PopoverContent>
      </Popover>
      {employees.length > 0 && (
        <List spacing={3}>
          {employees.map((item) => (
            <ListItem>
              <ListIcon as={MdCheckCircle} color="red.300" />
              {item}
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export { EmployeePopoverForm };
