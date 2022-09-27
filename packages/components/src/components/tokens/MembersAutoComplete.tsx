import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import {
  useDisclosure,
  InputRightElement,
  InputGroup,
  Input,
  Box,
  InputGroupProps,
} from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';

import { MemberHit } from './MemberHit';

import useDebouncedValue from '../hooks/useDebouncedValue';
import { Maybe, PersonMembership } from '../types';

export function search(query: string, p?: Maybe<PersonMembership>) {
  return (
    (p?.person?.email?.toLocaleLowerCase()?.indexOf(query) ?? -1) >= 0 ||
    (p?.person?.firstName?.toLocaleLowerCase()?.indexOf(query) ?? -1) >= 0 ||
    (p?.person?.lastName?.toLocaleLowerCase()?.indexOf(query) ?? -1) >= 0
  );
}

export type Props = Omit<InputGroupProps, 'onSelect'> & {
  members?: Maybe<Maybe<PersonMembership>[]>;
  placeholder?: string;
  onSelect?: (member: PersonMembership | null) => void;
};

export default function MembersAutoComplete({
  members,
  onSelect,
  ...props
}: Props) {
  const [value, refine] = useState('');
  const change = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => refine(evt.target.value),
    [],
  );
  const debounced = useDebouncedValue(value, 250);

  const [hits, setHits] = useState(members);
  useEffect(() => {
    if (!members?.length) {
      return;
    }
    const query = debounced.toLocaleLowerCase().trim();
    const filtered = query ? members?.filter((p) => search(query, p)) : members;
    setHits(filtered.slice(0, 100));
  }, [debounced, members]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <InputGroup pos="relative" {...props}>
      <Input
        placeholder="Search by keyword"
        aria-label="Search by keyword"
        role="combobox"
        aria-controls=""
        aria-autocomplete="list"
        value={value}
        onChange={change}
        onFocus={onOpen}
        onBlur={onClose}
        aria-expanded={isOpen}
      />
      <InputRightElement>
        <SearchIcon />
      </InputRightElement>
      {isOpen && !!hits?.length && (
        <Box
          pos="absolute"
          top="100%"
          left="0"
          minW="min(20rem, 100%)"
          maxH="40rem"
          overflow="scroll"
          boxShadow="sm"
          bg="white"
          zIndex={10}
        >
          {hits?.map((hit) => (
            <MemberHit hit={hit} key={hit?.id} onSelect={onSelect} />
          ))}
        </Box>
      )}
    </InputGroup>
  );
}
