import { useForm } from "react-hook-form";
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
} from "@chakra-ui/react";
import { useState } from "react";
import { IPhones } from "./PassangerPage.types";

interface PassangerPageProps {
  className?: string;
}

const PassangerPage: React.FC<PassangerPageProps> = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [phoneNumbers, setPhonenumbers] = useState<IPhones[]>([]);
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
    setNewPhoneNumber({
      number: "",
      description: "",
    });
  };

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
          Данные пассажира
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={Boolean(errors.name)}>
            <FormLabel htmlFor="name">ФИО</FormLabel>
            <Input
              id="name"
              placeholder="ФИО пассажира"
              autoComplete="on"
              {...register("name", {
                required: "Это поле является обязательным",
                minLength: {
                  value: 4,
                  message: "Длина не может быть мешьше 4 символов",
                },
              })}
            />
            <FormErrorMessage>
              <>{errors.name && errors.name.message}</>
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
          <RadioGroup>
            <Stack spacing={5} direction="row">
              <Radio colorScheme="red" value="1">
                Мужской
              </Radio>
              <Radio colorScheme="red" value="2">
                Женский
              </Radio>
            </Stack>
          </RadioGroup>
          <Center height="12px" />

          <Text>Дополнительная информация:</Text>
          <Textarea
            placeholder="Пометка для пассажира позволяющая улучшить качество обслуживания конкретного пассажира"
            size="md"
          />
          <Center height="12px" />

          <Text>Выбор наличия ЭКС (электрокардиостимулятора сердца)</Text>
          <RadioGroup defaultValue="1">
            <Stack spacing={5} direction="row">
              <Radio colorScheme="red" value="1">
                Есть
              </Radio>
              <Radio colorScheme="red" value="2">
                Нет
              </Radio>
            </Stack>
          </RadioGroup>
          {/* <FormControl isInvalid={Boolean(errors.name)}>
            <FormLabel htmlFor="passw">Пароль</FormLabel>
            <Input
              id="passw"
              placeholder="Пароль"
              type="password"
              autoComplete="on"
              {...register("passw", {
                required: "Это поле является обязательным",
                minLength: {
                  value: 4,
                  message: "Длина не может быть мешьше 4 символов",
                },
              })}
            />
            <FormErrorMessage>
              <>{errors.passw && errors.passw.message}</>
            </FormErrorMessage>
          </FormControl> */}
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
