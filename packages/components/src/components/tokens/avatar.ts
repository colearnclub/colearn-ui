import { AvatarProps } from '@chakra-ui/react';

import { colors, randomColorFromList } from '../../utils/colorUtils';
import { Maybe } from '../types';

function getAvatarBackground(src?: string, name?: string): string {
  if (src) {
    return 'transparent';
  }
  return name ? randomColorFromList(name, colors) : 'transparent';
}

export function avatarProps(
  person?: Maybe<{ avatar?: Maybe<string>; firstName?: Maybe<string> }>,
  bg?: string,
): AvatarProps {
  const src = person?.avatar ?? undefined;
  const name = person?.firstName ?? undefined;
  bg = bg ?? getAvatarBackground(src, name);

  return { src, name, bg };
}
