import { ForwardedRef, forwardRef, ReactNode } from 'react';

import {
  Modal as UIModal,
  ModalOverlay,
  ButtonProps,
  Button,
  ModalProps,
} from '@chakra-ui/react';

type Props = Omit<ModalProps, 'onClose'> & {
  isOpen?: boolean;
  overlay?: boolean;
  onClose?: () => void;
  children: ReactNode;
};

const noop = () => {};

export function Modal({
  children,
  isOpen = false,
  overlay = true,
  onClose,
  ...rest
}: Props) {
  return (
    <UIModal
      isOpen={isOpen}
      onClose={onClose || noop}
      scrollBehavior="outside"
      {...rest}
    >
      {overlay && <ModalOverlay />}
      {children}
    </UIModal>
  );
}

export function ModalClose(props: ButtonProps) {
  return (
    <Button
      colorScheme="gray"
      variant="ghost"
      size="md"
      mr="0.5rem"
      {...props}
    />
  );
}

export const ModalPrimary = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement | null>) => {
    return <Button colorScheme="c-orange" size="md" ref={ref} {...props} />;
  },
);
