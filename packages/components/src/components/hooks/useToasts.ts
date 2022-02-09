import { useToast } from '@chakra-ui/react';
import { useCallback } from 'react';

type ToastReturn = {
  (title: string, descrition?: string): void;
};

export function useErrorToast(): ToastReturn {
  const nariveToast = useToast();

  const toast = useCallback(
    (title: string, description?: string) =>
      nariveToast({
        title,
        description,
        status: 'error',
        duration: 3000,
        isClosable: true,
      }),
    [nariveToast],
  );

  return toast;
}

export function useSuccessToast(): ToastReturn {
  const nariveToast = useToast();

  const toast = useCallback(
    (title: string, description?: string) =>
      nariveToast({
        title,
        description,
        status: 'success',
        duration: 3000,
        isClosable: true,
      }),
    [nariveToast],
  );

  return toast;
}
