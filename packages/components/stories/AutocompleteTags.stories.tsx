import { useState } from 'react';
import AutocompleteTagsLocal from '../src/components/common/Autocomplete/AutocompleteTagsLocal';

export default {
  title: 'Common/AutocompleteTags',
  component: AutocompleteTagsLocal,
};

export const Uncontrolled = (args) => {
  const [value, setValue] = useState([]);
  return (
    <AutocompleteTagsLocal
      value={value}
      onChange={setValue}
      placeholder="Select tag"
      suggestions={[
        { id: '1', name: 'Tag 1' },
        { id: '2', name: 'Tag 2' },
        { id: '3', name: 'This' },
        { id: '4', name: 'Is' },
        { id: '5', name: 'Test' },
      ]}
    />
  );
};
