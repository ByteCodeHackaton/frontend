import { FC, useState } from "react";
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
  Divider,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface EmployeeWorkdayPageProps {
  className?: string;
}

const EmployeeWorkdayPage: FC<EmployeeWorkdayPageProps> = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const [isOther, setIsOther] = useState(false);
  const onChangehandler = (value: string) =>
    value === "option5" ? setIsOther(true) : setIsOther(false);

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
          Регистрация рабочего дня сотрудника
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel>Дата выхода</FormLabel>
            <Input placeholder="Дата выхода" size="md" type="datetime-local" />
          </FormControl>
          <Center height="12px" />
          <FormControl>
            <FormLabel>Время работы</FormLabel>
            <Select onChange={(e) => onChangehandler(e.target.value)}>
              <option value="option1">07:00-19:00</option>
              <option value="option2">08:00-20:00</option>
              <option value="option3">20:00-08:00</option>
              <option value="option4">08:00-17:00</option>
              <option value="option5">Другое</option>
            </Select>
            <Center height="12px" />

            {isOther && (
              <HStack>
                <FormLabel htmlFor="from">От</FormLabel>

                <Input
                  id="from"
                  placeholder="От"
                  size="md"
                  type="datetime-local"
                />
                <FormLabel htmlFor="to">До</FormLabel>

                <Input
                  id="to"
                  placeholder="До"
                  size="md"
                  type="datetime-local"
                />
              </HStack>
            )}
          </FormControl>
          <FormControl>
            <Divider orientation="horizontal" />
            <Center height="12px" />

            <FormLabel>Проставление статусов:</FormLabel>
            <Select>
              <option value="option1">Выходной</option>
              <option value="option2">Больничный</option>
              <option value="option3">Отпуск</option>
            </Select>
            <Center height="12px" />
            <HStack>
              <FormLabel htmlFor="from">От</FormLabel>

              <Input
                id="from"
                placeholder="От"
                size="md"
                type="datetime-local"
              />
              <FormLabel htmlFor="to">До</FormLabel>

              <Input id="to" placeholder="До" size="md" type="datetime-local" />
            </HStack>
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
                type="datetime-local"
              />
              <FormLabel htmlFor="to">До</FormLabel>

              <Input id="to" placeholder="До" size="md" type="datetime-local" />
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
                type="datetime-local"
              />
              <FormLabel htmlFor="to">До</FormLabel>

              <Input id="to" placeholder="До" size="md" type="datetime-local" />
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
                type="datetime-local"
              />
              <FormLabel htmlFor="to">До</FormLabel>

              <Input id="to" placeholder="До" size="md" type="datetime-local" />
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
                type="datetime-local"
              />
              <FormLabel htmlFor="to">До</FormLabel>

              <Input id="to" placeholder="До" size="md" type="datetime-local" />
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
