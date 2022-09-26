import { Box } from '@chakra-ui/react';
import { useEntitySelect } from '../src';

import MembersSelect from '../src/components/tokens/MembersSelect';
import MembersAutoComplete from '../src/components/tokens/MembersAutoComplete';
import { PersonMembership } from '../src/components/types';

export default {
  title: 'Tokens/MembersSelectExample',
};

function getMembers(id) {
  return {
    id,
    personId: id,
    person: {
      firstName: 'Name',
      id,
      lastName: 'Surname',
    },
  };
}

const members = Array(10)
  .fill(null)
  .map((_, idx) => getMembers(idx));

export function MembersSelectExample() {
  const [selected, select] = useEntitySelect<
    PersonMembership | null | undefined
  >();

  return (
    <Box w="400px">
      <MembersSelect value={selected} onSelect={select}>
        <MembersAutoComplete members={members} onSelect={select} />
      </MembersSelect>
    </Box>
  );
}
