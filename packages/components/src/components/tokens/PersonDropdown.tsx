import { useCallback } from 'react';
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuProps,
} from '@chakra-ui/react';

import { SmallCloseIcon } from '@chakra-ui/icons';

import EmptyLearnerIcon from '../../assets/empty-learner.svg';
import DiscloseIcon from '../../assets/disclose-down.svg';

import { avatarProps } from './avatar';
import { PersonMembership, Maybe } from '../types';
import { AvatarLabel } from './AvatarLabel';

type Props = Omit<MenuProps, 'onChange' | 'children'> & {
  members?: Maybe<Maybe<PersonMembership | undefined>[]>;
  value?: Maybe<string>;
  clearButton?: boolean;
  placeholder?: string;
  menuButtonVariant?: string;
  onChange?: (id?: Maybe<string>) => void;
};

export default function PersonDropdown({
  value,
  members,
  clearButton,
  placeholder = 'Select',
  menuButtonVariant = 'dropdown-menu',
  onChange,
  ...rest
}: Props) {
  const select = useCallback(
    (evt) => {
      onChange?.(evt.currentTarget.value);
    },
    [onChange],
  );

  const clear = useCallback(
    (evt) => {
      evt.preventDefault();
      onChange?.(undefined);
    },
    [onChange],
  );

  const selected = members?.find((l) => l?.personId === value);
  return (
    <Menu {...rest}>
      <MenuButton
        as={Button}
        variant={menuButtonVariant}
        size="lg"
        leftIcon={
          <Avatar
            {...avatarProps(selected?.person)}
            icon={<EmptyLearnerIcon />}
          />
        }
        rightIcon={
          clearButton && value ? (
            <SmallCloseIcon onClick={clear} />
          ) : (
            <DiscloseIcon />
          )
        }
      >
        <AvatarLabel ml="0">
          {selected?.person?.firstName ?? placeholder}
        </AvatarLabel>
      </MenuButton>
      <MenuList defaultValue={value ?? undefined}>
        {members?.map((m) => (
          <MenuItem key={m?.id} value={m?.personId} onClick={select}>
            <Avatar {...avatarProps(m?.person)} />
            <AvatarLabel>{m?.person?.firstName}</AvatarLabel>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
