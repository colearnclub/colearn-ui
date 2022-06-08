import { Box, BoxProps, chakra } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export function Container(props: BoxProps) {
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

export function Text(props: BoxProps) {
  return (
    <Box
      display={{ base: 'none', '2xl': 'block' }}
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
