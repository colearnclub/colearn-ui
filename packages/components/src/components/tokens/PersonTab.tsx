import { Avatar, Box, FlexProps, useMultiStyleConfig } from '@chakra-ui/react';
import { AvatarLabel } from './AvatarLabel';

import { avatarProps } from './avatar';
import { Maybe, Person } from '../types';

export type PersonTabProps = FlexProps & {
  person?: Maybe<Person>;
  variant?: string;
  size?: string;
  selected?: boolean;
};

export function PersonTab({
  person,
  selected,
  title,
  variant,
  size = 'md',
  as = 'button',
  ...props
}: PersonTabProps) {
  const styles = useMultiStyleConfig('PersonTab', { size, variant });
  return (
    <Box as={as} __css={styles.container} aria-selected={selected} {...props}>
      {person && (
        <Avatar {...avatarProps(person)} size={size} __css={styles.avatar} />
      )}
      <AvatarLabel __css={styles.label} color={undefined}>
        {person?.firstName ?? title}
      </AvatarLabel>
    </Box>
  );
}
