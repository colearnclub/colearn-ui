import { Flex, Heading } from '@chakra-ui/react';

export default function NotFoundPage() {
  return (
    <Flex align="center" justify="center" minH="calc(100vh - 10rem)">
      <Heading color="gray.400">Page not found</Heading>
    </Flex>
  );
}
