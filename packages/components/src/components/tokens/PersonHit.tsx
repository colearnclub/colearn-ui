import { memo } from 'react';
import { Box, Avatar } from '@chakra-ui/react';

import { avatarProps } from '../tokens/avatar';
import { Maybe, Person } from '../types';

type PersonHitProps = {
  hit: Maybe<Person>;
  onSelect?: (person: Person | null) => void;
};

export const PersonHit = memo(({ hit, onSelect }: PersonHitProps) => {
  const select = () => onSelect?.(hit);
  return (
    <Box
      role="button"
      cursor="pointer"
      onMouseDown={select}
      onTouchStart={select}
      p="0.75rem"
      w="25rem"
      _hover={{ bg: 'gray.100' }}
      noOfLines={1}
      fontSize="1rem"
      lineHeight="1.3"
      fontWeight="400"
      display="flex"
      alignItems="center"
    >
      <Avatar {...avatarProps(hit)} mr="0.5rem" />
      <Box>
        <Box>
          {hit?.firstName} {hit?.lastName}
        </Box>
        <Box fontSize="0.875rem" color="gray.600">
          {hit?.email}
        </Box>
      </Box>
    </Box>
  );
});
