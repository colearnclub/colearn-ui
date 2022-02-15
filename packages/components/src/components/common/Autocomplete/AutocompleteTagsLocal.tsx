import { useState, useMemo } from 'react';
import { useMultiStyleConfig } from '@chakra-ui/react';

import AutocompleteTagsBase, {
  Props as BaseProps,
  filterSuggstions,
} from './AutocompleteTagsBase';

export type Props = Omit<
  BaseProps,
  'styles' | 'tagSize' | 'query' | 'onChangeQuery'
> & {
  size?: 'md' | 'lg' | 'sm';
  variant?: string;
};

export default function AutocompleteTagsLocal({
  size,
  variant,
  suggestions: intialSuggestions,
  ...rest
}: Props) {
  const styles = useMultiStyleConfig('AutocompleteTags', { size, variant });
  const [query, setQuery] = useState('');

  const suggestions = useMemo(
    () => filterSuggstions(intialSuggestions ?? [], query),
    [intialSuggestions, query],
  );

  return (
    <AutocompleteTagsBase
      suggestions={suggestions}
      query={query}
      onChangeQuery={setQuery}
      tagSize={size}
      styles={styles}
      {...rest}
    />
  );
}
