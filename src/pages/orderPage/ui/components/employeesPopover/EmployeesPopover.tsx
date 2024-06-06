import {
  Button,
  Center,
  FormControl,
  Input,
  List,
  ListIcon,
  ListItem,
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
import { MdCheckCircle } from "react-icons/md";

const Form = ({
  onCancel,
  setEmployees,
  employees,
}: {
  onCancel: () => void;
  setEmployees: React.Dispatch<React.SetStateAction<string[]>>;
  employees: string[];
}) => {
  return (
    <PopoverBody>
      <Input id="employee" placeholder="ФИО сотрудника" autoComplete="on" />
      <Center height="12px" />

      <FormControl>
        <Select placeholder="Участок обслуживания">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </FormControl>
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
