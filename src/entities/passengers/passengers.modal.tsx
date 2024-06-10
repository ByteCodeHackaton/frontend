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
import { PassengersForm } from "./passengersForm";
import { Detail } from "./types";

interface PassengersModalProps {
  options: Detail;
}

const PassengersModal: FC<PassengersModalProps> = ({ options }) => {
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
            <PassengersForm onClickSubmit={onClose} options={options} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export { PassengersModal };
