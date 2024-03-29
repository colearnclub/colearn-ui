import { useCallback, ReactElement, MouseEvent } from 'react';

import {
  Tag as UITag,
  TagProps,
  TagLabel,
  TagCloseButton,
} from '@chakra-ui/react';

type Props = Omit<TagProps, 'onClick'> & {
  name: string;
  id?: string;
  icon?: ReactElement;
  size?: 'md' | 'lg' | 'sm';
  onClick?: (tag: string, id?: string) => void;
  onDelete?: (tag: string) => void;
};

export default function Tag({
  size,
  name,
  id,
  icon,
  onDelete,
  onClick,
  ...rest
}: Props) {
  const click = useCallback(
    (evt: MouseEvent<HTMLElement>) => {
      evt.preventDefault();
      evt.stopPropagation();

      onClick?.(name, id);
    },
    [name, id, onClick],
  );

  const del = useCallback(
    (evt: MouseEvent<HTMLElement>) => {
      evt.preventDefault();
      evt.stopPropagation();

      onDelete?.(name);
    },
    [onDelete, name],
  );

  return (
    <UITag
      size={size}
      cursor={onClick ? 'pointer' : 'default'}
      onClick={click}
      {...rest}
    >
      {icon}
      <TagLabel>{name}</TagLabel>
      {onDelete && <TagCloseButton onClick={del} />}
    </UITag>
  );
}
