import { Box, BoxProps } from '@chakra-ui/react';
import useDocumentTitle from '../hooks/useDocumentTitle';

type Props = BoxProps & {
  title: string;
};

export function Main(props: BoxProps) {
  return (
    <Box
      as="main"
      boxSizing="border-box"
      pl={{ base: '5rem', '2xl': '10rem' }}
      minH="100vh"
      {...props}
      sx={{
        '@media print': {
          display: 'none',
        },
      }}
    />
  );
}

export function Container({ title, ...rest }: Props) {
  useDocumentTitle(title);
  return <Box p="2rem" {...rest} />;
}

export function Content(props: BoxProps) {
  return (
    <Box
      border="solid 1px #d3d3d3"
      borderRadius="6px"
      bg="white"
      mx="auto"
      maxW="110rem"
      {...props}
    />
  );
}

export function Title(props: BoxProps) {
  return (
    <Box fontSize="1.125rem" color="#313131" fontWeight="bold" {...props} />
  );
}
