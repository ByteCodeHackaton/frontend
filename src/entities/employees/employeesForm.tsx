import { FC, useEffect } from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Center,
  Select,
  RadioGroup,
  Stack,
  Radio,
  InputGroup,
  InputLeftAddon,
  PinInput,
  PinInputField,
  HStack,
  useToast,
  Skeleton,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { Detail } from "~/entities/employees/employees.types";
import {
  useGetEmployeeRanksQuery,
  useLazySetEmployeeQuery,
  useUpdateEmployeeMutation,
} from "~/entities/employees/employees.api";

interface EmployeesFormProps {
  options?: {
    date: string;
    time_work: string;
    id: string;
    fio: string;
    uchastok: string;
    smena: string;
    rank: string;
    sex: string;
    phone_work: string;
    phone_personal: string;
    tab_number: string;
    type_work: string;
  };
  onClickSubmit?: () => void;
}

const EmployeesForm: FC<EmployeesFormProps> = ({
  options = undefined,
  onClickSubmit = undefined,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    control,
  } = useForm({
    defaultValues: options
      ? options
      : {
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

  const [
    sendSetRequest,
    { data: dataSet, isSuccess: isSuccessSet, isError: isErrorSet },
  ] = useLazySetEmployeeQuery();
  const [
    sendUpdateRequest,
    { data: dataUpdata, isSuccess: isSuccessUpdate, isError: isErrorUpdate },
  ] = useUpdateEmployeeMutation();

  const {
    data: dataRanks,
    isLoading: isLoadingRanks,
    isSuccess: isSuccessRanks,
  } = useGetEmployeeRanksQuery();

  const onSubmit = (body: Detail) => {
    if (onClickSubmit) {
      sendUpdateRequest({
        body: {
          date: body.date,
          time_work: body.time_work,
          fio: body.fio,
          uchastok: body.uchastok,
          smena: body.smena,
          rank: body.rank,
          sex: body.sex,
          phone_work: body.phone_work,
          phone_personal: body.phone_personal,
          tab_number: body.tab_number,
          type_work: body.type_work,
        },
        params: { id: body.id },
      });
      onClickSubmit();
    }
    if (!onClickSubmit) {
      sendSetRequest(body);
    }
  };

  useEffect(() => {
    if (isSuccessSet)
      toast({
        title: "Сотрудник добавлен",
        status: "success",
        isClosable: true,
      });
    if (isSuccessUpdate) {
      toast({
        title: "Данные сотрудника изменены",
        status: "success",
        isClosable: true,
      });
    }
    if (isErrorUpdate)
      toast({
        title: "Ошибка при изменении данных сотрудника",
        status: "error",
        isClosable: true,
      });
    if (isErrorSet)
      toast({
        title: "Ошибка при добавлении сотрудника",
        status: "error",
        isClosable: true,
      });
  }, [isSuccessSet, isErrorSet, isSuccessUpdate, isErrorUpdate]);

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
                <Skeleton isLoaded={!isLoadingRanks}>
                  <Select onChange={(value) => onChange(value)} value={value}>
                    {isSuccessRanks &&
                      dataRanks.document.details.map((option) => (
                        <option value={option.rank}>{option.rank}</option>
                      ))}
                  </Select>
                </Skeleton>
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

export { EmployeesForm };
