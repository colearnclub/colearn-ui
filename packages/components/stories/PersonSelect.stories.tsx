import { Box } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { useEntitySelect } from '../src';

import PersonSelect from '../src/components/tokens/PersonSelect';
import { Person } from '../src/components/types';

export default {
  title: 'Tokens/PersonSelectExample',
};

function getPerson(id) {
  return {
    firstName: 'Name',
    id,
    userId: id,
    lastName: 'Surname',
  };
}

function personSearch(query: string, p?: Maybe<Person>) {
  return (
    (p?.email?.toLocaleLowerCase()?.indexOf(query) ?? -1) >= 0 ||
    (p?.firstName?.toLocaleLowerCase()?.indexOf(query) ?? -1) >= 0 ||
    (p?.lastName?.toLocaleLowerCase()?.indexOf(query) ?? -1) >= 0 ||
    `${p?.userId}`.indexOf(query) >= 0
  );
}

const persons = Array(10)
  .fill(null)
  .map((_, idx) => getPerson(idx));

export function PersonSelectExample() {
  const [selected, select] = useEntitySelect<Person | null | undefined>();
  const [hits, setHits] = useState(persons);

  const filter = useCallback(
    (query) => {
      const filtered = query
        ? persons?.filter((p) => personSearch(query, p))
        : persons;
      setHits(filtered);
    },
    [setHits],
  );

  return (
    <Box w="400px">
      <PersonSelect
        value={selected}
        onSelect={select}
        onSearch={filter}
        persons={hits}
      />
    </Box>
  );
}
