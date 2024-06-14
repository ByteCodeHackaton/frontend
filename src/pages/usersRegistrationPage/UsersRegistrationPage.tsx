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
  useToast,
  Skeleton,
  Select,
} from "@chakra-ui/react";
import {
  useGetRolesQuery,
  useSetUserMutation,
} from "~/entities/users/users.api";

interface UsersRegistrationPageProps {
  className?: string;
}

const UsersRegistrationPage: React.FC<UsersRegistrationPageProps> = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    control,
  } = useForm();
  const [signUp] = useSetUserMutation();
  const {
    data: roles,
    isSuccess: isSuccessRoles,
    isLoading: isLoadingRoles,
  } = useGetRolesQuery();

  const toast = useToast();
  const onSubmit = async (values) => {
    try {
      await signUp({
        login: values.login,
        pass: values.pass,
      });
      toast({
        title: "Пользователь зарегестрирован",
        status: "success",
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: err.data,
        status: "error",
        isClosable: true,
      });
    }
  };
  return (
    <Center h="calc(100vh - 300px)" w="100vw" position="static">
      <Box
        p={4}
        minWidth="300px"
        borderRadius="lg"
        border="1px solid #EDF2F7"
        boxShadow="0 0 1em rgb(1 1 1 / 10%)"
      >
        <Heading size="md" mb={4}>
          Новый пользователь
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={Boolean(errors.login)}>
            <FormLabel htmlFor="login">Имя входа</FormLabel>
            <Input
              id="login"
              placeholder="Имя входа"
              autoComplete="on"
              {...register("login", {
                required: "Это поле является обязательным",
                minLength: {
                  value: 4,
                  message: "Длина не может быть мешьше 4 символов",
                },
              })}
            />
            <FormErrorMessage>
              <>{errors.login && errors.login.message}</>
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.pass)}>
            <FormLabel htmlFor="pass">Пароль</FormLabel>
            <Input
              id="pass"
              placeholder="Пароль"
              type="password"
              autoComplete="on"
              {...register("pass", {
                required: "Это поле является обязательным",
                minLength: {
                  value: 4,
                  message: "Длина не может быть мешьше 4 символов",
                },
              })}
            />
            <FormErrorMessage>
              <>{errors.pass && errors.pass.message}</>
            </FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel>Должность сотрудника</FormLabel>
            <Controller
              control={control}
              name="id"
              render={({ field: { onChange, value } }) => (
                <Skeleton isLoaded={!isLoadingRoles}>
                  <Select onChange={(value) => onChange(value)} value={value}>
                    {isSuccessRoles &&
                      roles.document.details.map((option) => (
                        <option value={option.id}>{option.role}</option>
                      ))}
                  </Select>
                </Skeleton>
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
              Зарегистрировать
            </Button>
          </Center>
        </form>
      </Box>
    </Center>
  );
};

export { UsersRegistrationPage };
