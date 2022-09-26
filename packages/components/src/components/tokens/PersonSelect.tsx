import { Box, CloseButton, Flex, Skeleton } from '@chakra-ui/react';
import { Maybe, Person } from '../types';

import PersonAutoComplete from './PersonAutoComplete';
import PersonCardBlock from './PersonCardBlock';

type Props = {
  value?: Maybe<Person>;
  persons: Person[];
  isReadOnly?: boolean;
  loading?: boolean;
  onSelect?: (person?: Maybe<Person>) => void;
  onSearch: (v: string) => void;
};

export default function PersonSelect({
  value,
  persons,
  onSelect,
  isReadOnly,
  onSearch,
  loading,
}: Props) {
  return (
    <>
      {!value && (
        <Box pb="1.5rem">
          <Skeleton isLoaded={!loading}>
            <PersonAutoComplete
              persons={persons}
              onSearch={onSearch}
              onSelect={onSelect}
            />
          </Skeleton>
        </Box>
      )}
      {value && (
        <Flex align="center" justify="space-between">
          <PersonCardBlock py="0.75rem" person={value} />
          {!isReadOnly && <CloseButton onClick={() => onSelect?.(null)} />}
        </Flex>
      )}
    </>
  );
}
