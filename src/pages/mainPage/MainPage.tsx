import { FC } from "react";
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
  Divider,
} from "@chakra-ui/react";

interface MainPageProps {
  className?: string;
}

const MainPage: FC<MainPageProps> = () => {
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
          Заявки
        </Heading>
        <Divider orientation="horizontal" />
        Coming soon...
      </Box>
    </Center>
  );
};

export { MainPage };
