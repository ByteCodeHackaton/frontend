import {
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  IconButton,
  Input,
  useEditableControls,
} from "@chakra-ui/react";
import { FC } from "react";
import { SlClose, SlCheck, SlPencil } from "react-icons/sl";

interface PassengersContactsProps {
  phone: string;
  description: string;
}

const PassengersContacts: FC<PassengersContactsProps> = () => {
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton
          aria-label="Check"
          icon={<SlCheck />}
          {...getSubmitButtonProps()}
        />
        <IconButton
          aria-label="Close"
          icon={<SlClose />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          aria-label="Edit"
          size="sm"
          icon={<SlPencil />}
          {...getEditButtonProps()}
        />
      </Flex>
    );
  }

  return (
    <Editable
      textAlign="center"
      defaultValue="Rasengan ⚡️"
      fontSize="2xl"
      isPreviewFocusable={false}
    >
      <EditablePreview />
      {/* Here is the custom input */}
      <Input as={EditableInput} />
      <EditableControls />
    </Editable>
  );
};

export { PassengersContacts };
