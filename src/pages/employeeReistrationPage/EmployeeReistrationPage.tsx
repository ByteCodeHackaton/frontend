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
  InputGroup,
  InputLeftAddon,
  PinInput,
  PinInputField,
  HStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const EmployeeReistrationPage: FC = () => {
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
          Регистрация сотрудника
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={Boolean(errors.name)}>
            <FormLabel htmlFor="employee">ФИО сотрудника полностью</FormLabel>
            <Input
              id="employee"
              autoComplete="on"
              placeholder="ФИО сотрудника полностью"
              {...register("employee", {
                required: "Это поле является обязательным",
                minLength: {
                  value: 4,
                  message: "Длина не может быть мешьше 4 символов",
                },
              })}
            />
            <FormErrorMessage>
              <>{errors.employee && errors.employee.message}</>
            </FormErrorMessage>
          </FormControl>
          <Center height="12px" />
          <FormControl isInvalid={Boolean(errors.name)}>
            <FormLabel htmlFor="employeeTwo">Фамилия и инициалы</FormLabel>
            <Input
              id="employeeTwo"
              autoComplete="on"
              placeholder="Фамилия и инициалы"
              {...register("employeeTwo", {
                required: "Это поле является обязательным",
                minLength: {
                  value: 4,
                  message: "Длина не может быть мешьше 4 символов",
                },
              })}
            />
            <FormErrorMessage>
              <>{errors.employeeTwo && errors.employeeTwo.message}</>
            </FormErrorMessage>
          </FormControl>
          <Center height="12px" />
          <FormControl>
            <FormLabel>Пол</FormLabel>
            <RadioGroup defaultValue="1">
              <Stack spacing={5} direction="row">
                <Radio colorScheme="red" value="1">
                  Мужской
                </Radio>
                <Radio colorScheme="red" value="2">
                  Женский
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <Center height="12px" />
          <FormControl>
            <FormLabel>Смена сотрудника</FormLabel>
            <Select>
              <option value="option1">1</option>
              <option value="option2">2</option>
              <option value="option3">1(Н)</option>
              <option value="option4">2(Н)</option>
              <option value="option5">5</option>
            </Select>
          </FormControl>
          <Center height="12px" />
          <FormControl>
            <FormLabel>Должность сотрудника</FormLabel>
            <Select>
              <option value="option1">администратор</option>
              <option value="option2">специалист</option>
              <option value="option3">начальник участка (ЦУ)</option>
              <option value="option4">старший инспектор (ЦСИ)</option>
              <option value="option5">оператор (ЦИО)</option>
              <option value="option6">инспектор (ЦИ)</option>
            </Select>
          </FormControl>
          <Center height="12px" />
          <FormControl>
            <FormLabel>Время работы</FormLabel>
            <Select>
              <option value="option1">07:00-19:00</option>
              <option value="option2">08:00-20:00</option>
              <option value="option3">20:00-08:00</option>
              <option value="option4">08:00-17:00</option>
            </Select>
          </FormControl>
          <Center height="12px" />
          <FormControl>
            <FormLabel>Рабочий телефон</FormLabel>
            <InputGroup>
              <InputLeftAddon>+7</InputLeftAddon>
              <Input type="tel" placeholder="" />
            </InputGroup>
          </FormControl>
          <Center height="12px" />
          <FormControl>
            <FormLabel>Личный телефон</FormLabel>
            <InputGroup>
              <InputLeftAddon>+7</InputLeftAddon>
              <Input type="tel" placeholder="" />
            </InputGroup>
          </FormControl>
          <Center height="12px" />
          <FormControl>
            <FormLabel>Табельный номер</FormLabel>
            <HStack>
              <PinInput size="md">
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </FormControl>
          <Center height="12px" />
          <FormControl>
            <FormLabel>
              Легкий труд? (сотрудники, которым запрещены определенные действия
              по состоянию здоровья)
            </FormLabel>
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
          </FormControl>
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

export { EmployeeReistrationPage };
