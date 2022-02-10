import { Box, FlexProps, useMultiStyleConfig } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { Learner, Maybe } from '../types';

import { LearnerAvatar, LearnerAvatarLabel } from './LearnerAvatar';

type LearnerTabProps = FlexProps & {
  learner?: Maybe<Learner>;
  variant?: string;
  size?: string;
  selected?: boolean;
};

export function LearnerTab({
  learner,
  selected,
  title,
  variant,
  size = 'md',
  as = 'button',
  ...props
}: LearnerTabProps) {
  const styles = useMultiStyleConfig('LearnerTab', { size, variant });
  return (
    <Box as={as} __css={styles.container} aria-selected={selected} {...props}>
      {learner && (
        <LearnerAvatar size={size} learner={learner} __css={styles.avatar} />
      )}
      <LearnerAvatarLabel __css={styles.label} color={undefined}>
        {learner?.name ?? title}
      </LearnerAvatarLabel>
    </Box>
  );
}

export function LearnerTabLink(props: { to: string } & LearnerTabProps) {
  return <LearnerTab as={Link} {...props} />;
}
