import {
  Button,
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
  RadioGroup,
  useControllableState,
  useDisclosure,
  Text,
  Stack,
  Radio,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const Form = ({
  onCancel,
  setLuggage,
  luggage,
}: {
  onCancel: () => void;
  setLuggage: React.Dispatch<React.SetStateAction<string[]>>;
  luggage: string[];
}) => {
  return (
    <PopoverBody>
      <Text>Тип багажа</Text>
      <RadioGroup defaultValue="1">
        <Stack spacing={5} direction="row">
          <Radio colorScheme="red" value="1">
            Тип 1
          </Radio>
          <Radio colorScheme="red" value="2">
            Тип 2
          </Radio>
        </Stack>
      </RadioGroup>
      <Text>Вес, кг</Text>
      <NumberInput defaultValue={0.5} precision={2} step={0.1}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text>Необходима ли помощь?</Text>
      <RadioGroup defaultValue="1">
        <Stack spacing={5} direction="row">
          <Radio colorScheme="red" value="1">
            Да
          </Radio>
          <Radio colorScheme="red" value="2">
            Нет
          </Radio>
        </Stack>
      </RadioGroup>
      {/* <PopoverTrigger> */}
      <Button
        colorScheme="red"
        mt={4}
        onClick={() => {
          onCancel();
          setLuggage([...luggage, "some luggage"]);
        }}
      >
        Сохранить
      </Button>
    </PopoverBody>
  );
};

const LuggagePopoverForm = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [luggage, setLuggage] = useControllableState<string[]>({
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
          <Button colorScheme="red">Добавить багаж</Button>
        </PopoverTrigger>
        <PopoverContent p={5}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Добавление багажа</PopoverHeader>

          <Form luggage={luggage} setLuggage={setLuggage} onCancel={onClose} />
        </PopoverContent>
      </Popover>
      {luggage.length > 0 && (
        <List spacing={3}>
          {luggage.map((item) => (
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

export { LuggagePopoverForm };
