import { ReactNode, useMemo, createContext, useContext } from 'react';

import { useDisclosure } from '@chakra-ui/react';

export type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const OpenMenuContext = createContext<Props>({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

export function useOpenMenuContext() {
  return useContext(OpenMenuContext);
}

export function OpenMenuProvider({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const ctx = useMemo(
    () => ({ isOpen, onOpen, onClose }),
    [isOpen, onOpen, onClose],
  );

  return (
    <OpenMenuContext.Provider value={ctx}>{children}</OpenMenuContext.Provider>
  );
}
