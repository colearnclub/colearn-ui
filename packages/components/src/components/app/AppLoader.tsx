import { Spinner, Flex, Text, FlexProps } from '@chakra-ui/react';

import useDelay from '../hooks/useDelay';

export default function AppLoader(props: FlexProps) {
  const passed = useDelay(30);
  if (!passed) {
    return null;
  }
  return (
    <Flex align="center" justify="center" minH="calc(100vh - 10rem)" {...props}>
      <Flex flexDir="column" alignItems="center">
        <Spinner color="gray.500" size="xl" />
        <Text pl={1} color="gray.500" mt={3}>
          Loading...
        </Text>
      </Flex>
    </Flex>
  );
}
