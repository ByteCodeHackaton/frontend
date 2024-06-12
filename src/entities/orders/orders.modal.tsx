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
import { OrderForm } from "./components/orderForm/OrderForm";
import { Detail } from "./orders.types";

interface OrdersModalProps {
  options: Detail;
}

const OrdersModal: FC<OrdersModalProps> = ({ options }) => {
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
          <ModalHeader>Заявка №{options.id}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <OrderForm onClickSubmit={onClose} options={options} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export { OrdersModal };
