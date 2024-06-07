import { FC, useEffect } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { Detail } from "~/entities/employees/employees.types";
import { useLazySetEmployeeQuery } from "~/entities/employees/employees.api";

const EmployeeReistrationPage: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    control,
  } = useForm({
    defaultValues: {
      date: "",
      time_work: "07:00-19:00",
      id: "",
      fio: "",
      uchastok: "",
      smena: "1",
      rank: "администратор",
      sex: "male",
      phone_work: "",
      phone_personal: "",
      tab_number: "",
      type_work: "yes",
    },
  });

  const toast = useToast();

  const [sendRequest, { data, isSuccess, isError }] = useLazySetEmployeeQuery();

  const onSubmit = (data: Detail) => {
    sendRequest(data);
  };

  useEffect(() => {
    if (isSuccess)
      toast({
        title: "Сотрудник добавлен",
        status: "success",
        isClosable: true,
      });
    if (isError)
      toast({
        title: "Ошибка при добавлении сотрудника",
        status: "error",
        isClosable: true,
      });
    // console.log(data)
  }, [isSuccess, isError]);

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
          <FormControl isInvalid={Boolean(errors.fio)}>
            <FormLabel htmlFor="employee">ФИО сотрудника полностью</FormLabel>
            <Input
              id="fio"
              autoComplete="on"
              placeholder="ФИО сотрудника полностью"
              {...register("fio", {
                required: "Это поле является обязательным",
                minLength: {
                  value: 4,
                  message: "Длина не может быть мешьше 4 символов",
                },
              })}
            />
            <FormErrorMessage>
              <>{errors.fio && errors.fio.message}</>
            </FormErrorMessage>
          </FormControl>
          <Center height="12px" />
          <FormLabel htmlFor="employeeTwo">Фамилия и инициалы</FormLabel>
          <Input
            id="employeeTwo"
            autoComplete="on"
            placeholder="Фамилия и инициалы"
          />

          <Center height="12px" />
          <FormControl>
            <FormLabel>Пол</FormLabel>
            <Controller
              control={control}
              name="sex"
              render={({ field: { onChange, value } }) => (
                <RadioGroup onChange={(value) => onChange(value)} value={value}>
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="red" value="male">
                      Мужской
                    </Radio>
                    <Radio colorScheme="red" value="female">
                      Женский
                    </Radio>
                  </Stack>
                </RadioGroup>
              )}
            />
          </FormControl>
          <Center height="12px" />
          <FormControl>
            <FormLabel>Смена сотрудника</FormLabel>
            <Controller
              control={control}
              name="smena"
              render={({ field: { onChange, value } }) => (
                <Select onChange={(value) => onChange(value)} value={value}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="1(Н)">1(Н)</option>
                  <option value="2(Н)">2(Н)</option>
                  <option value="5">5</option>
                </Select>
              )}
            />
          </FormControl>
          <Center height="12px" />
          <FormControl>
            <FormLabel>Должность сотрудника</FormLabel>
            <Controller
              control={control}
              name="rank"
              render={({ field: { onChange, value } }) => (
                <Select onChange={(value) => onChange(value)} value={value}>
                  <option value="администратор">администратор</option>
                  <option value="специалист">специалист</option>
                  <option value="начальник участка (ЦУ)">
                    начальник участка (ЦУ)
                  </option>
                  <option value="старший инспектор (ЦСИ)">
                    старший инспектор (ЦСИ)
                  </option>
                  <option value="оператор (ЦИО)">оператор (ЦИО)</option>
                  <option value="инспектор (ЦИ)">инспектор (ЦИ)</option>
                </Select>
              )}
            />
          </FormControl>
          <Center height="12px" />
          <FormControl>
            <FormLabel>Время работы</FormLabel>
            <Controller
              control={control}
              name="time_work"
              render={({ field: { onChange, value } }) => (
                <Select onChange={(value) => onChange(value)} value={value}>
                  <option value="07:00-19:00">07:00-19:00</option>
                  <option value="08:00-20:00">08:00-20:00</option>
                  <option value="20:00-08:00">20:00-08:00</option>
                  <option value="08:00-17:00">08:00-17:00</option>
                </Select>
              )}
            />
          </FormControl>
          <Center height="12px" />
          <FormControl>
            <FormLabel>Рабочий телефон</FormLabel>
            <InputGroup>
              <InputLeftAddon>+7</InputLeftAddon>
              <Input type="tel" placeholder="" {...register("phone_work")} />
            </InputGroup>
          </FormControl>
          <Center height="12px" />
          <FormControl>
            <FormLabel>Личный телефон</FormLabel>
            <InputGroup>
              <InputLeftAddon>+7</InputLeftAddon>
              <Input
                type="tel"
                placeholder=""
                {...register("phone_personal")}
              />
            </InputGroup>
          </FormControl>
          <Center height="12px" />
          <FormControl>
            <FormLabel>Табельный номер</FormLabel>
            <HStack>
              <Controller
                control={control}
                name="tab_number"
                render={({ field: { onChange, value } }) => (
                  <PinInput
                    size="md"
                    onChange={(value) => onChange(value)}
                    value={value}
                  >
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                )}
              />
            </HStack>
          </FormControl>
          <Center height="12px" />
          <FormControl>
            <FormLabel>
              Легкий труд? (сотрудники, которым запрещены определенные действия
              по состоянию здоровья)
            </FormLabel>
            <Controller
              control={control}
              name="type_work"
              render={({ field: { onChange, value } }) => (
                <RadioGroup onChange={(value) => onChange(value)} value={value}>
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="red" value="yes">
                      Да
                    </Radio>
                    <Radio colorScheme="red" value="no">
                      Нет
                    </Radio>
                  </Stack>
                </RadioGroup>
              )}
            />
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
