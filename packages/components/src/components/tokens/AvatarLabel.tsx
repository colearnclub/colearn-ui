import { Box, BoxProps } from '@chakra-ui/react';

export function AvatarLabel(props: BoxProps) {
  return (
    <Box fontSize="1rem" color="#313131" fontWeight="500" ml="7px" {...props} />
  );
}
