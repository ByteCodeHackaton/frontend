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
  useToast,
  Skeleton,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { EmployeePopoverForm } from "../employeesPopover/EmployeesPopover";
import { LuggagePopoverForm } from "../luggagePopover/LuggagePopover";
import { Detail } from "../../orders.types";
import {
  useGetOrdersStatusesQuery,
  useLazySetOrderQuery,
  useUpdateOrderMutation,
} from "../../orders.api";

interface OrderFormProps {
  options?: Detail;
  onClickSubmit?: () => void;
}

const OrderForm: FC<OrderFormProps> = ({
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
          cat_pas: "",
          datetime: "",
          id: "",
          id_pas: "",
          id_st1: "",
          id_st2: "",
          insp_sex_f: "",
          insp_sex_m: "",
          status: "",
          time3: "",
          time4: "",
          time_over: "",
          tpz: "",
        },
  });

  const toast = useToast();

  const [
    sendSetRequest,
    { data: dataSet, isSuccess: isSuccessSet, isError: isErrorSet },
  ] = useLazySetOrderQuery();

  const [
    sendUpdateRequest,
    { data: dataUpdata, isSuccess: isSuccessUpdate, isError: isErrorUpdate },
  ] = useUpdateOrderMutation();

  const {
    data: dataStatuses,
    isLoading: isLoadingStatuses,
    isSuccess: isSuccessStatuses,
    isError: isErrorStatuses,
  } = useGetOrdersStatusesQuery();

  async function onSubmit(body: Detail) {
    if (onClickSubmit) {
      sendUpdateRequest({
        body: {
          cat_pas: body.cat_pas,
          datetime: body.datetime,
          id_pas: body.id_pas,
          id_st1: body.id_st1,
          id_st2: body.id_st2,
          insp_sex_f: body.insp_sex_f,
          insp_sex_m: body.insp_sex_m,
          status: body.status,
          time3: body.time3,
          time4: body.time4,
          time_over: body.time_over,
          tpz: body.tpz,
        },
        params: { id: body.id },
      });
      onClickSubmit();
    }
    if (!onClickSubmit) {
      sendSetRequest(body);
    }
  }

  useEffect(() => {
    if (isSuccessSet)
      toast({
        title: "Заявка добавлена",
        status: "success",
        isClosable: true,
      });
    if (isSuccessUpdate) {
      toast({
        title: "Данные заявки изменены",
        status: "success",
        isClosable: true,
      });
    }
    if (isErrorUpdate)
      toast({
        title: "Ошибка при изменении данных заявки",
        status: "error",
        isClosable: true,
      });
    if (isErrorSet)
      toast({
        title: "Ошибка при добавлении заявки",
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
          <FormControl isInvalid={Boolean(errors.name)}>
            <FormLabel htmlFor="id_pas">Пассажир</FormLabel>
            <Input
              id="id_pas"
              placeholder="ID пассажира"
              autoComplete="on"
              {...register("id_pas", {
                required: "Это поле является обязательным",
                minLength: {
                  value: 4,
                  message: "Длина не может быть мешьше 4 символов",
                },
              })}
            />
            <FormErrorMessage>
              <>{errors.id_pas && errors.id_pas.message}</>
            </FormErrorMessage>
          </FormControl>
          <Center height="12px" />
          <FormLabel>Cтанции отправления-прибытия</FormLabel>
          <Flex flexDir="row" gap={4}>
            <FormControl>
              <Controller
                control={control}
                name="id_st1"
                render={({ field: { onChange, value } }) => (
                  <Select
                    placeholder="Откуда"
                    onChange={(value) => onChange(value)}
                    value={value}
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                )}
              />
            </FormControl>
            <FormControl>
              <Controller
                control={control}
                name="id_st2"
                render={({ field: { onChange, value } }) => (
                  <Select
                    placeholder="Куда"
                    onChange={(value) => onChange(value)}
                    value={value}
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                )}
              />
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
            {...register("datetime")}
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
          <FormLabel>Количество выделенных сотрудников (женщин)</FormLabel>
          <Stack shouldWrapChildren direction="row">
            <Controller
              control={control}
              name="insp_sex_f"
              render={({ field: { onChange, value } }) => (
                <NumberInput
                  size="md"
                  maxW={24}
                  defaultValue={1}
                  min={1}
                  onChange={(value) => onChange(value)}
                  value={value}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              )}
            />
          </Stack>

          <Center height="12px" />
          <FormLabel>Количество выделенных сотрудников (мужчин)</FormLabel>
          <Stack shouldWrapChildren direction="row">
            <Controller
              control={control}
              name="insp_sex_m"
              render={({ field: { onChange, value } }) => (
                <NumberInput
                  size="md"
                  maxW={24}
                  defaultValue={1}
                  min={1}
                  onChange={(value) => onChange(value)}
                  value={value}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              )}
            />
          </Stack>

          <Center height="12px" />
          <LuggagePopoverForm />
          <Center height="12px" />

          <Flex flexDir="row" gap={4}>
            <Text>Статус заявки:</Text>
            {isSuccessStatuses && (
              <Controller
                control={control}
                name="status"
                render={({ field: { onChange, value } }) => (
                  <Skeleton isLoaded={!isLoadingStatuses}>
                    <Select onChange={(value) => onChange(value)} value={value}>
                      {isSuccessStatuses &&
                        dataStatuses.document.details.map((status) => (
                          <option value={status.state}>{status.state}</option>
                        ))}
                    </Select>
                  </Skeleton>
                )}
              />
            )}
            {isErrorStatuses && <Text>Не удалось получить</Text>}
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
