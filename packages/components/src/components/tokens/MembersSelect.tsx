import { Box, CloseButton, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Maybe, PersonMembership } from '../types';

import PersonCardBlock from './PersonCardBlock';

type Props = {
  children?: ReactNode;
  value?: Maybe<PersonMembership>;
  isReadOnly?: boolean;
  onSelect?: (person?: Maybe<PersonMembership>) => void;
};

export default function MembersSelect({
  children,
  value,
  onSelect,
  isReadOnly,
}: Props) {
  return (
    <>
      {!value && <Box pb="1.5rem">{children}</Box>}
      {value && (
        <Flex align="center" justify="space-between">
          <PersonCardBlock py="0.75rem" person={value?.person} />
          {!isReadOnly && <CloseButton onClick={() => onSelect?.(null)} />}
        </Flex>
      )}
    </>
  );
}
