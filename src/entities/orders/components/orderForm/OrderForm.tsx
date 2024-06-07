import { FC } from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Center,
  Heading,
  Text,
  Select,
  Flex,
  Textarea,
  RadioGroup,
  Stack,
  Radio,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { EmployeePopoverForm } from "../employeesPopover/EmployeesPopover";
import { LuggagePopoverForm } from "../luggagePopover/LuggagePopover";

interface OrderFormProps {}

const OrderForm: FC<OrderFormProps> = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

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
          Заявка
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={Boolean(errors.name)}>
            <FormLabel htmlFor="passenger">Пассажир</FormLabel>
            <Input
              id="passenger"
              placeholder="ФИО пассажира"
              autoComplete="on"
              {...register("passenger", {
                required: "Это поле является обязательным",
                minLength: {
                  value: 4,
                  message: "Длина не может быть мешьше 4 символов",
                },
              })}
            />
            <FormErrorMessage>
              <>{errors.passenger && errors.passenger.message}</>
            </FormErrorMessage>
          </FormControl>
          <Center height="12px" />
          <FormLabel>Cтанции отправления-прибытия</FormLabel>
          <Flex flexDir="row" gap={4}>
            <FormControl>
              <Select placeholder="Откуда">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>
            <FormControl>
              <Select placeholder="Куда">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>
          </Flex>
          <Center height="12px" />
          <FormLabel>Описание места встречи</FormLabel>
          <Textarea placeholder="Описание выходов или направлений" size="md" />
          <Center height="12px" />
          <FormLabel>Описание места прибытия</FormLabel>
          <Textarea placeholder="Описание выходов или направлений" size="md" />
          <Center height="12px" />
          <FormLabel>Дата заявки, время встречи</FormLabel>
          <Input
            placeholder="Дата заявки, время встречи"
            size="md"
            type="datetime-local"
          />
          <Center height="12px" />

          <Text>Метод приема заявки</Text>
          <RadioGroup defaultValue="1">
            <Stack spacing={5} direction="row">
              <Radio colorScheme="red" value="1">
                по телефону
              </Radio>
              <Radio colorScheme="red" value="2">
                через электронные сервисы
              </Radio>
            </Stack>
          </RadioGroup>
          <Center height="12px" />
          <FormLabel>Пересадки</FormLabel>
          <Text>"Маршрут"</Text>
          <Center height="12px" />
          <FormLabel>
            Выбор вокзалов, с которых мы можем встретить пассажира
          </FormLabel>
          <FormControl>
            <Select placeholder="Вокзалы">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>
          <Center height="12px" />
          <FormLabel>Количество пассажиров</FormLabel>
          <Stack shouldWrapChildren direction="row">
            <NumberInput size="md" maxW={24} defaultValue={1} min={1}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Stack>
          <Center height="12px" />
          <FormLabel>Категория заявки</FormLabel>
          <FormControl>
            <Select placeholder="Категория">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>
          <Center height="12px" />
          <FormLabel>
            Количество выделенных сотрудников (мужчин, женщин)
          </FormLabel>
          <Stack shouldWrapChildren direction="row">
            <NumberInput size="md" maxW={24} defaultValue={1} min={1}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Stack>

          <Center height="12px" />

          <LuggagePopoverForm />
          <Center height="12px" />

          <Flex flexDir="row" gap={4}>
            <Text>Статус заявки:</Text>
            <Text>Status</Text>
          </Flex>

          <Center height="12px" />
          <FormLabel>Дополнительная информация:</FormLabel>
          <Textarea
            placeholder="Описание пассажира, о необходимой помощи и прочей информации необходимой для сопровождения по данной заявке"
            size="md"
          />
          <Center height="12px" />
          <EmployeePopoverForm />

          <Center>
            <Button
              mt={4}
              colorScheme="red"
              isLoading={isSubmitting}
              type="submit"
            >
              Сохранить
            </Button>
          </Center>
        </form>
      </Box>
    </Center>
  );
};

export { OrderForm };
