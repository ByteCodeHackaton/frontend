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
import { useLoginMutation } from "~/shared/api/apiSlice";
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

  async function onSubmit(values) {
    try {
      const userData = await login({
        user: values.user,
        password: values.passw,
      }).unwrap();
      dispatch(setCredentials({ ...userData, user: values.user }));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
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
          <FormControl isInvalid={Boolean(errors.name)}>
            <FormLabel htmlFor="name">Имя входа</FormLabel>
            <Input
              id="name"
              placeholder="Имя входа"
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
          <FormControl isInvalid={Boolean(errors.name)}>
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
