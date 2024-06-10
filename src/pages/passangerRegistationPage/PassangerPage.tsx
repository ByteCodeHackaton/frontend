import { Center, Heading } from "@chakra-ui/react";
import { PassengersForm } from "~/entities/passengers/passengersForm";

interface PassangerPageProps {
  className?: string;
}

const PassangerPage: React.FC<PassangerPageProps> = () => {
  return (
    <>
      <Center>
        <Heading size="md" mt={24}>
          Данные пассажира
        </Heading>
      </Center>

      <PassengersForm />
    </>
  );
};

export { PassangerPage };
