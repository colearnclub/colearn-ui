import {
  Box,
  Button,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@chakra-ui/react';
import { ModalClose, Modal, ModalPrimary } from '../Modal';

export default {
  title: 'Containers / Modal',
  component: Modal,
};

export function Usual() {
  const { isOpen, onClose, onToggle } = useDisclosure();
  return (
    <Box w="50%">
      <Button onClick={onToggle} colorScheme="c-orange" variant="solid">
        Toggle modal
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xs">
        <ModalContent maxW="30rem">
          <ModalHeader>Modal Header</ModalHeader>
          <ModalBody>Test</ModalBody>
          <ModalFooter>
            <ModalPrimary>Ok</ModalPrimary>
            <ModalClose onClick={onClose}>Cancel</ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
