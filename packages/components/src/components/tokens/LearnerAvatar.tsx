import { Avatar, AvatarProps, Box, BoxProps } from '@chakra-ui/react';

import { colors, randomColorFromList } from '../../utils/colorUtils';
import { Learner, Maybe } from '../types';

type Props = AvatarProps & {
  learner?: Maybe<Learner>;
};

function getAvatarBackground(src?: string, name?: string): string {
  if (src) {
    return 'transparent';
  }
  return name ? randomColorFromList(name, colors) : 'transparent';
}

export function LearnerAvatar({ name, src, bg, learner, ...props }: Props) {
  const name_ = learner?.name ?? name;
  const src_ = learner?.attributes?.avatar ?? src ?? undefined;
  return (
    <Avatar
      src={src_}
      name={name_}
      bg={bg ?? getAvatarBackground(src_, name_)}
      {...props}
    />
  );
}

export function LearnerAvatarLabel(props: BoxProps) {
  return (
    <Box fontSize="1rem" color="#313131" fontWeight="500" ml="7px" {...props} />
  );
}
