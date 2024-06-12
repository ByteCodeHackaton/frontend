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
} from "@chakra-ui/react";
import { useLoginMutation } from "~/shared/lib/react-redux/slices/authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "~/shared/lib/react-redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values, event: Event) => {
    event.preventDefault();
    console.log({
      login: values.login,
      password: values.password,
    });
    try {
      const userData = await login({
        login: values.login,
        password: values.password,
      }).unwrap();
      dispatch(setCredentials({ ...userData, user: values.user }));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     alert(JSON.stringify(values, null, 2));
  //     resolve();
  //   }, 3000);
  // });
  // }

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
          Вход
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
          <FormControl isInvalid={Boolean(errors.password)}>
            <FormLabel htmlFor="password">Пароль</FormLabel>
            <Input
              id="password"
              placeholder="Пароль"
              type="password"
              autoComplete="on"
              {...register("password", {
                required: "Это поле является обязательным",
                minLength: {
                  value: 4,
                  message: "Длина не может быть мешьше 4 символов",
                },
              })}
            />
            <FormErrorMessage>
              <>{errors.password && errors.password.message}</>
            </FormErrorMessage>
          </FormControl>
          <Center>
            <Button
              mt={4}
              colorScheme="red"
              isLoading={isSubmitting}
              type="submit"
            >
              Войти
            </Button>
          </Center>
        </form>
      </Box>
      {isSubmitting && <Text>isSubmitting</Text>}
    </Center>
  );
};

export { LoginPage };
