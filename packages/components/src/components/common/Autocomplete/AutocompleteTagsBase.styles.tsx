import { MouseEventHandler, useCallback } from 'react';
import {
  Box,
  CSSWithMultiValues,
  RecursiveCSSObject,
  TagLeftIcon,
  Image,
} from '@chakra-ui/react';

import Tag from '../Tag';
import { SuggestionType } from './types';

import { markIt } from '../../../utils/matchers';

type SearchTagProps = {
  suggestion: SuggestionType;
  index: number;
  size?: 'md' | 'lg' | 'sm';
  onDelete: (index: number) => void;
};

export function SearchTag({
  suggestion,
  size,
  index,
  onDelete,
}: SearchTagProps) {
  return (
    <Tag
      name={suggestion?.name!}
      onDelete={() => onDelete(index)}
      size={size}
      variant={suggestion.type === 'source' ? 'outline' : 'resource'}
      icon={
        suggestion.type === 'source' && suggestion.iconUrl ? (
          <TagLeftIcon
            as={Image}
            {...{ src: suggestion.iconUrl }}
            objectFit="contain"
            w="1.125rem"
            h="1.125rem"
          />
        ) : undefined
      }
    />
  );
}

type SuggestionProps = {
  suggestion: SuggestionType;
  styles: RecursiveCSSObject<CSSWithMultiValues>;
  query: string;
  active: boolean;
  onAdd: (tag: SuggestionType) => void;
};

export function Suggestion({
  onAdd,
  suggestion,
  query,
  active,
  styles,
}: SuggestionProps) {
  const mouseDown: MouseEventHandler<HTMLElement> = useCallback(
    (e) => {
      e.preventDefault();
      onAdd(suggestion);
    },
    [onAdd, suggestion],
  );
  return (
    <Box
      __css={styles}
      as="li"
      listStyleType="none"
      role="option"
      display="flex"
      alignItems="center"
      aria-selected={active}
      onMouseDown={mouseDown}
    >
      {suggestion.type === 'source' && suggestion.iconUrl && (
        <Image
          w="1.5rem"
          h="1.5rem"
          objectFit="contain"
          mr="0.5rem"
          src={suggestion.iconUrl}
        />
      )}
      <Box
        noOfLines={1}
        dangerouslySetInnerHTML={{
          __html: suggestion.name ? markIt(suggestion.name!, query ?? '') : '',
        }}
      />
    </Box>
  );
}
