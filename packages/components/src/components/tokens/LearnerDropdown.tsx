import { useCallback } from 'react';
import {
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

import { LearnerAvatar, LearnerAvatarLabel } from './LearnerAvatar';
import { Learner, Maybe } from '../types';

type Props = Omit<MenuProps, 'onChange' | 'children'> & {
  learners?: Maybe<Maybe<Learner | undefined>[]>;
  value?: Maybe<string>;
  clearButton?: boolean;
  placeholder?: string;
  menuButtonVariant?: string;
  onChange?: (id?: Maybe<string>) => void;
};

export default function LearnerDropdown({
  value,
  learners,
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

  const learner = learners?.find((l) => l?.id === value);
  return (
    <Menu {...rest}>
      <MenuButton
        as={Button}
        variant={menuButtonVariant}
        size="lg"
        leftIcon={
          <LearnerAvatar learner={learner} icon={<EmptyLearnerIcon />} />
        }
        rightIcon={
          clearButton && value ? (
            <SmallCloseIcon onClick={clear} />
          ) : (
            <DiscloseIcon />
          )
        }
      >
        <LearnerAvatarLabel ml="0">
          {learner?.name ?? placeholder}
        </LearnerAvatarLabel>
      </MenuButton>
      <MenuList defaultValue={value ?? undefined}>
        {learners?.map((l) => (
          <MenuItem key={l?.id} value={l?.id} onClick={select}>
            <LearnerAvatar learner={l} />
            <LearnerAvatarLabel>{l?.name}</LearnerAvatarLabel>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
