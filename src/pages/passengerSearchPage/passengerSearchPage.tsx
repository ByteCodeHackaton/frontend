import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Spinner,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SlMagnifier, SlPhone } from "react-icons/sl";
import { PassangerCard } from "~/entities/passengers/PassengersList.ui";
import { useLazyGetPassengerQuery } from "~/entities/passengers/passengers.api";
import { Detail } from "~/entities/passengers/types";

interface PassengerSearchPageProps {}

const PassengerSearchPage: FC<PassengerSearchPageProps> = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Detail>();
  const [sendRequest, { data, isSuccess, isLoading, isError }] =
    useLazyGetPassengerQuery();
  const onSubmit = (data: { fio?: string; phone?: string }) => {
    sendRequest(data);
    console.log(data);
  };
  const toast = useToast();

  useEffect(() => {
    if (isError)
      toast({
        title: "Не найдено",
        status: "error",
        isClosable: true,
      });
    // console.log(data)
  }, [isError]);

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
          Поиск пассажира
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <InputGroup>
              <InputLeftAddon>
                <Icon as={SlMagnifier} />
              </InputLeftAddon>
              <Input type="text" placeholder="ФИО" {...register("fio")} />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon>
                <Icon as={SlPhone} />
              </InputLeftAddon>
              <Input
                type="text"
                placeholder="Номер телефоа"
                {...register("phone")}
              />
            </InputGroup>
            {isLoading && <Spinner color="red.500" />}{" "}
            {isSuccess && <PassangerCard detail={data} />}
            <Center>
              <Button
                mt={4}
                colorScheme="red"
                isLoading={isSubmitting}
                type="submit"
              >
                Поиск
              </Button>
            </Center>
          </Stack>
        </form>
      </Box>
    </Center>
  );
};

export { PassengerSearchPage };
