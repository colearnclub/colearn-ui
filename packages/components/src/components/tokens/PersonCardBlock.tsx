import { ReactNode } from 'react';
import { Avatar, Box, Flex, FlexProps } from '@chakra-ui/react';

import { avatarProps } from '../tokens/avatar';
import { Maybe, Person } from '../types';

type Props = FlexProps & {
  person?: Maybe<Person>;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  subtitle?: ReactNode;
};

export default function PersonCardBlock({
  person,
  size = 'sm',
  subtitle,
  ...rest
}: Props) {
  return (
    <Flex lineHeight="1.3" align="center" {...rest}>
      <Avatar {...avatarProps(person)} mr="0.5rem" size={size} />
      <Box>
        <Box>
          {person?.firstName} {person?.lastName}
        </Box>
        <Box fontSize="0.875rem" color="gray.600">
          {subtitle ? subtitle : person?.email}
        </Box>
      </Box>
    </Flex>
  );
}
