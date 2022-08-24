import { MutableRefObject, useCallback, useRef } from 'react';
// import { Link, LinkProps } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  BoxProps,
  IconButton,
  chakra,
  Slide,
  useOutsideClick,
  Flex,
} from '@chakra-ui/react';

import { useOpenMenuContext } from './OpenMenuContext';
import useMatchMedia from '../hooks/useMatchMedia';

const mdQuery = '(min-width: 768px)';

export function Container(props: BoxProps) {
  const ref = useRef() as MutableRefObject<HTMLInputElement>;
  const isDesktop = useMatchMedia(mdQuery);
  const { isOpen, onClose } = useOpenMenuContext();

  useOutsideClick({ ref, handler: onClose });

  const click = useCallback(() => {
    onClose();
  }, [onClose]);

  if (isDesktop) {
    return (
      <Box
        as="nav"
        pos="fixed"
        left="0"
        top="0"
        w={{ base: '5rem', '2xl': '10rem' }}
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        bg="bg.800"
        pb="1.75rem"
        zIndex={4}
        {...props}
      />
    );
  }

  return (
    <Slide direction="left" in={isOpen} style={{ zIndex: 10 }}>
      <Box
        ref={ref}
        as="nav"
        pos="fixed"
        left="0"
        top="0"
        bottom={0}
        w="15rem"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        bg="bg.800"
        pb="1.75rem"
        zIndex={4}
        onClick={click}
        {...props}
      />
    </Slide>
  );
}

export function Text(props: BoxProps) {
  return (
    <Box
      display={{ base: 'block', md: 'none', '2xl': 'block' }}
      whiteSpace="nowrap"
      {...props}
    />
  );
}

// const LogoLink = chakra(Link, {
//   baseStyle: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     boxSizing: 'border-box',
//     height: '3.125rem',
//     borderBottom: '1px',
//     borderBottomColor: 'rgba(255, 255, 255, 0.2)',
//   },
// });

export function MobileLogo(props: BoxProps) {
  const isDesktop = useMatchMedia(mdQuery);
  const { onOpen } = useOpenMenuContext();

  if (isDesktop) {
    return null;
  }

  return (
    <Flex align="center">
      <Box />
      <IconButton
        icon={<HamburgerIcon />}
        aria-label="menu"
        variant="ghost"
        _hover={{ bg: 'transparent' }}
        onClick={onOpen}
      />
    </Flex>
  );
}

export function DesktopLogo(props: BoxProps) {
  return <Box {...props} />;
}
