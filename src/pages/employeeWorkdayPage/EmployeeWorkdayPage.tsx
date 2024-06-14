import { FC, useEffect, useState } from "react";
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Center,
  Heading,
  Select,
  HStack,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { useLazySetWorkdayQuery } from "~/entities/employees/employees.api";

interface EmployeeWorkdayPageProps {
  className?: string;
}

const EmployeeWorkdayPage: FC<EmployeeWorkdayPageProps> = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    control,
  } = useForm();
  const toast = useToast();

  const [isOther, setIsOther] = useState(false);
  const onChangehandler = (value: string) =>
    value === "option5" ? setIsOther(true) : setIsOther(false);

  const [
    sendSetRequest,
    { data: dataSet, isSuccess: isSuccessSet, isError: isErrorSet },
  ] = useLazySetWorkdayQuery();

  useEffect(() => {
    if (isSuccessSet)
      toast({
        title: "Успешно",
        status: "success",
        isClosable: true,
      });
    if (isErrorSet)
      toast({
        title: "Ошибка",
        status: "error",
        isClosable: true,
      });
  }, [isSuccessSet, isErrorSet]);

  const onSubmit = (values) =>
    sendSetRequest({
      id: "",
      employee_id: "emp",
      date_work: values.date_work,
      time_work:
        values.time_work === "my_time"
          ? `${values.time_work_from}-${values.time_work_to}`
          : values.time_work,
      state_wd: `${values.date_dop_smena_from}-${values.date_dop_smena_to}`,
      date_dop_smena: `${values.date_dop_smena_from}-${values.date_dop_smena_to}`,
      date_ucheba: `${values.date_ucheba_from}-${values.date_ucheba_to}`,
      date_change: `${values.date_change_from}-${values.date_change_to}`,
      intern: `${values.intern_from}-${values.intern_to}`,
    });

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
          Регистрация рабочего дня сотрудника
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel>Дата выхода</FormLabel>
            <Input
              placeholder="Дата выхода"
              size="md"
              type="datetime-local"
              {...register("date_work")}
            />
          </FormControl>
          <Center height="12px" />
          <FormControl>
            <FormLabel>Время работы</FormLabel>
            <Controller
              control={control}
              name="time_work"
              render={({ field: { onChange, value } }) => (
                <Select
                  onChange={(value) => {
                    onChange(value);
                  }}
                  value={value}
                >
                  <option value="07:00-19:00">07:00-19:00</option>
                  <option value="08:00-20:00">08:00-20:00</option>
                  <option value="20:00-08:00">20:00-08:00</option>
                  <option value="08:00-17:00">08:00-17:00</option>
                  <option value="my_time">Другое</option>
                </Select>
              )}
            />
            <Center height="12px" />

            {isOther && (
              <HStack>
                <FormLabel htmlFor="from">От</FormLabel>

                <Input
                  id="from"
                  placeholder="От"
                  size="md"
                  type="time"
                  {...register("time_work_from")}
                />
                <FormLabel htmlFor="to">До</FormLabel>

                <Input
                  id="to"
                  placeholder="До"
                  size="md"
                  type="time"
                  {...register("time_work_to")}
                />
              </HStack>
            )}
          </FormControl>
          <FormControl>
            <Divider orientation="horizontal" />
            <Center height="12px" />

            <FormLabel>Проставление статусов:</FormLabel>
            <Controller
              control={control}
              name="state_wd"
              render={({ field: { onChange, value } }) => (
                <Select
                  onChange={(value) => {
                    onChange(value);
                  }}
                  value={value}
                >
                  <option value="Выходной">Выходной</option>
                  <option value="Больничный">Больничный</option>
                  <option value="Отпуск">Отпуск</option>
                </Select>
              )}
            />
            <Center height="12px" />
            {/* <HStack>
              <FormLabel htmlFor="from">От</FormLabel>

              <Input id="from" placeholder="От" size="md" type="time" />
              <FormLabel htmlFor="to">До</FormLabel>

              <Input id="to" placeholder="До" size="md" type="time" />
            </HStack> */}
          </FormControl>
          <Center height="12px" />

          <Divider orientation="horizontal" />
          <FormControl>
            <Divider orientation="horizontal" />
            <Center height="12px" />

            <FormLabel>
              Дополнительная смена(выход не по своему графику):
            </FormLabel>
            <Center height="12px" />
            <HStack>
              <FormLabel htmlFor="from">От</FormLabel>

              <Input
                id="from"
                placeholder="От"
                size="md"
                type="time"
                {...register("date_dop_smena_from")}
              />
              <FormLabel htmlFor="to">До</FormLabel>

              <Input
                id="to"
                placeholder="До"
                size="md"
                type="time"
                {...register("date_dop_smena_to")}
              />
            </HStack>
          </FormControl>
          <Center height="12px" />
          <Divider orientation="horizontal" />

          <FormControl>
            <Divider orientation="horizontal" />
            <Center height="12px" />

            <FormLabel>Учеба с отрывом от производства:</FormLabel>
            <Center height="12px" />
            <HStack>
              <FormLabel htmlFor="from">От</FormLabel>

              <Input
                id="from"
                placeholder="От"
                size="md"
                type="time"
                {...register("date_ucheba_from")}
              />
              <FormLabel htmlFor="to">До</FormLabel>

              <Input
                id="to"
                placeholder="До"
                size="md"
                type="time"
                {...register("date_ucheba_to")}
              />
            </HStack>
          </FormControl>
          <Center height="12px" />
          <Divider orientation="horizontal" />

          <FormControl>
            <Divider orientation="horizontal" />
            <Center height="12px" />

            <FormLabel>
              Изменение времени работы (если время работы не совпадает с
              графиком):
            </FormLabel>
            <Center height="12px" />
            <HStack>
              <FormLabel htmlFor="from">От</FormLabel>

              <Input
                id="from"
                placeholder="От"
                size="md"
                type="time"
                {...register("date_change_from")}
              />
              <FormLabel htmlFor="to">До</FormLabel>

              <Input
                id="to"
                placeholder="До"
                size="md"
                type="time"
                {...register("date_change_to")}
              />
            </HStack>
          </FormControl>
          <Center height="12px" />
          <Divider orientation="horizontal" />

          <FormControl>
            <Divider orientation="horizontal" />
            <Center height="12px" />

            <FormLabel>
              Стажировка (заявки только совместно с наставником):
            </FormLabel>
            <Center height="12px" />
            <HStack>
              <FormLabel htmlFor="from">От</FormLabel>

              <Input
                id="from"
                placeholder="От"
                size="md"
                type="time"
                {...register("intern_from")}
              />
              <FormLabel htmlFor="to">До</FormLabel>

              <Input
                id="to"
                placeholder="До"
                size="md"
                type="time"
                {...register("intern_to")}
              />
            </HStack>
          </FormControl>
          <Center height="12px" />
          <Divider orientation="horizontal" />

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

export { EmployeeWorkdayPage };
