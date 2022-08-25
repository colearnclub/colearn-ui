import { createContext, ForwardedRef, ReactNode, useContext } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  BoxProps,
  chakra,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  forwardRef,
  IconButton,
  IconButtonProps,
  useDisclosure,
  UseDisclosureReturn,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useMatchMedia from '../hooks/useMatchMedia';

export const Container = forwardRef(
  (props: BoxProps, ref: ForwardedRef<HTMLElement | null>) => {
    return (
      <Box
        as="nav"
        pos="fixed"
        left="0"
        top="0"
        w={{ base: '100%', md: '5rem', '2xl': '10rem' }}
        height="100vh"
        display={{ base: 'flex' }}
        flexDirection="column"
        justifyContent="space-between"
        bg="bg.800"
        pb="1.75rem"
        zIndex={4}
        {...props}
      />
    );
  },
);

export function Text(props: BoxProps) {
  return (
    <Box
      display={{ base: 'block', md: 'none', '2xl': 'block' }}
      whiteSpace="nowrap"
      {...props}
    />
  );
}

export const LogoLink = chakra(Link, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    height: '3.125rem',
    borderBottom: '1px',
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },
});

export const CollapsibleSidebarContext =
  createContext<UseDisclosureReturn | null>(null);

export function useCollapsibleSidebar() {
  return useContext(CollapsibleSidebarContext)!;
}

export function CollapsibleProvider({ children }: { children?: ReactNode }) {
  const ctx = useDisclosure();
  return (
    <CollapsibleSidebarContext.Provider value={ctx}>
      {children}
    </CollapsibleSidebarContext.Provider>
  );
}

const mdQuery = '(min-width: 768px)';

export function CollapsibleContainer({ children }: { children?: ReactNode }) {
  const { isOpen, onClose } = useCollapsibleSidebar();
  const isDesktop = useMatchMedia(mdQuery);

  if (isDesktop) {
    return <Container>{children}</Container>;
  }

  return (
    <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
      <DrawerContent>
        <Container onClick={onClose}>
          <DrawerCloseButton color="white" />
          {children}
        </Container>
      </DrawerContent>
    </Drawer>
  );
}

export function CollapsibleToggleButton(props: IconButtonProps) {
  const { onToggle } = useCollapsibleSidebar();
  return (
    <IconButton
      size="lg"
      py="0.5rem"
      outline="none"
      variant="link"
      display={{ base: 'block', md: 'none' }}
      onClick={onToggle}
      icon={<HamburgerIcon />}
      {...props}
    />
  );
}
