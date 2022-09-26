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

import { PersonHit } from './PersonHit';

import useDebouncedValue from '../hooks/useDebouncedValue';
import { Maybe, Person } from '../types';

export type Props = Omit<InputGroupProps, 'onSelect'> & {
  persons?: Maybe<Maybe<Person>[]>;
  placeholder?: string;
  onSelect?: (person: Person | null) => void;
  onSearch: (v: string) => void;
};

export default function PersonAutoComplete({
  persons,
  onSelect,
  onSearch,
  placeholder = 'Search by keyword',
  ...props
}: Props) {
  const [value, refine] = useState('');
  const change = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => refine(evt.target.value),
    [],
  );
  const debounced = useDebouncedValue(value, 250);

  useEffect(() => {
    const query = debounced.toLocaleLowerCase().trim();
    onSearch(query);
  }, [debounced, onSearch]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const hits = persons?.slice(0, 100);

  return (
    <InputGroup pos="relative" {...props}>
      <Input
        placeholder={placeholder}
        aria-label={placeholder}
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
            <PersonHit hit={hit} key={hit?.id} onSelect={onSelect} />
          ))}
        </Box>
      )}
    </InputGroup>
  );
}
