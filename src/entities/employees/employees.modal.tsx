import {
  Icon,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";
import { AiOutlineForm } from "react-icons/ai";
import { EmployeesForm } from "./employeesForm";

interface EmployeesModalProps {
  options: {
    date: string;
    time_work: string;
    id: string;
    fio: string;
    uchastok: string;
    smena: string;
    rank: string;
    sex: string;
    phone_work: string;
    phone_personal: string;
    tab_number: string;
    type_work: string;
  };
}

const EmployeesModal: FC<EmployeesModalProps> = ({ options }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        aria-label="Open modal"
        icon={<Icon as={AiOutlineForm} color="white" h={8} w={8} />}
        colorScheme="red"
        onClick={onOpen}
      />
      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{options.fio}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EmployeesForm onClickSubmit={onClose} options={options} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export { EmployeesModal };
