import { Controller, useForm } from "react-hook-form";
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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  Textarea,
  RadioGroup,
  Stack,
  Radio,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IPhones } from "./PassangerPage.types";
import { useLazySetPassengerQuery } from "~/entities/passengers/passengers.api";
import { Detail } from "~/entities/passengers/types";

interface PassangerPageProps {
  className?: string;
}

const PassangerPage: React.FC<PassangerPageProps> = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    control,
  } = useForm<Detail>({
    defaultValues: {
      id: "",
      fio: "",
      category: "",
      eks: 0,
      sex: "male",
    },
  });
  const toast = useToast();

  const [phoneNumbers, setPhonenumbers] = useState<IPhones[]>([]);
  const [phoneNumber, setPhonenumber] = useState<string>("");
  const [newPhoneNumber, setNewPhoneNumber] = useState<IPhones>({
    number: "",
    description: "",
  });

  const handlerNewPhoneNumber = (e: string) => {
    setNewPhoneNumber((prev) => ({ number: e, description: prev.description }));
  };
  const handlerNewPhoneDescription = (e: string) => {
    setNewPhoneNumber((prev) => ({ number: prev.number, description: e }));
  };

  const handlerAddNewPhone = () => {
    setPhonenumbers((prev) => [...prev, newPhoneNumber]);
    setPhonenumber(newPhoneNumber.number);
    setNewPhoneNumber({
      number: "",
      description: "",
    });
  };
  const [sendRequest, { data, isSuccess, isError }] =
    useLazySetPassengerQuery();

  const onSubmit = (data: Detail) => {
    sendRequest({
      ...data,
      phone: phoneNumber,
      // description: newPhoneNumber.description,
    });
    console.log({
      ...data,
      phone: phoneNumber,
      // description: newPhoneNumber.description,
    });
  };
  // const onSubmit = (data: Detail) => sendRequest(data);

  useEffect(() => {
    if (isSuccess)
      toast({
        title: "Пассажир добавлен",
        status: "success",
        isClosable: true,
      });
    if (isError)
      toast({
        title: "Ошибка при добавлении пассажира",
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
          Данные пассажира
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={Boolean(errors.fio)}>
            <FormLabel htmlFor="fio">ФИО</FormLabel>
            <Input
              id="fio"
              placeholder="ФИО пассажира"
              autoComplete="on"
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
          <Text>Контактные телефоны:</Text>
          {phoneNumbers.length > 0 && (
            <Accordion allowMultiple>
              <AccordionItem>
                {phoneNumbers.map((phoneItem) => (
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          {phoneItem.number}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    {phoneItem.description.length > 0 && (
                      <AccordionPanel pb={4}>
                        {phoneItem.description}
                      </AccordionPanel>
                    )}
                  </AccordionItem>
                ))}
              </AccordionItem>
            </Accordion>
          )}
          <Center height="12px" />

          <Popover>
            <PopoverTrigger>
              <Button colorScheme="red">Добавить телефон</Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Номер телефона</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <Input
                    id="phone"
                    type="text"
                    placeholder="Телефон"
                    value={newPhoneNumber?.number}
                    onChange={(e) => handlerNewPhoneNumber(e.target.value)}
                  />
                </PopoverBody>
                <PopoverFooter>
                  <Text>Описание</Text>
                  <Textarea
                    value={newPhoneNumber.description}
                    onChange={(e) => handlerNewPhoneDescription(e.target.value)}
                    placeholder=""
                    size="sm"
                  />
                  <PopoverTrigger>
                    <Button
                      colorScheme="red"
                      mt={4}
                      onClick={handlerAddNewPhone}
                    >
                      Сохранить
                    </Button>
                  </PopoverTrigger>
                </PopoverFooter>
              </PopoverContent>
            </Portal>
          </Popover>
          <Center height="12px" />

          <Text>Пол:</Text>
          <FormControl>
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

          <Text>Дополнительная информация:</Text>
          <FormControl isInvalid={Boolean(errors.description)}>
            <Textarea
              placeholder="Пометка для пассажира позволяющая улучшить качество обслуживания конкретного пассажира"
              size="md"
              {...register("description")}
            />
          </FormControl>
          <Center height="12px" />

          <Text>Выбор наличия ЭКС (электрокардиостимулятора сердца)</Text>
          <FormControl>
            <Controller
              control={control}
              name="eks"
              render={({ field: { onChange, value } }) => (
                <RadioGroup
                  defaultValue="0"
                  onChange={(value) => onChange(value)}
                  value={value}
                >
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="red" value={Number("1")}>
                      Есть
                    </Radio>
                    <Radio colorScheme="red" value={Number("0")}>
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

export { PassangerPage };
