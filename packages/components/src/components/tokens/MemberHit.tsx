import { memo } from 'react';
import { Box, Avatar } from '@chakra-ui/react';

import { avatarProps } from '../tokens/avatar';
import { Maybe, PersonMembership } from '../types';

type MemberHitProps = {
  hit: Maybe<PersonMembership>;
  onSelect?: (person: PersonMembership | null) => void;
};

export const MemberHit = memo(({ hit, onSelect }: MemberHitProps) => {
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
      <Avatar {...avatarProps(hit?.person)} mr="0.5rem" />
      <Box>
        <Box>
          {hit?.person?.firstName} {hit?.person?.lastName}
        </Box>
        <Box fontSize="0.875rem" color="gray.600">
          {hit?.person?.email}
        </Box>
      </Box>
    </Box>
  );
});
