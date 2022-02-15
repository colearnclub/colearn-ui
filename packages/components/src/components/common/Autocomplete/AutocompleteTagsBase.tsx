import {
  Component,
  createRef,
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from 'react';

import {
  Box,
  BoxProps,
  chakra,
  CSSWithMultiValues,
  RecursiveCSSObject,
} from '@chakra-ui/react';

import { KEYS } from '../../../utils/dom';
import { matchExact, matchPartial } from '../../../utils/matchers';
import { remove } from '../../../utils/arrays';

import getAutocompleteA11yProps from './getAutocompleteA11yProps';
import { Suggestion, SearchTag } from './AutocompleteTagsBase.styles';

import { SuggestionType } from './types';

import { Maybe } from '../../types';

export function filterSuggstions(
  suggestions: SuggestionType[] | undefined,
  query: string,
  maxSuggestions = 6,
): SuggestionType[] | undefined {
  const rx = matchPartial(query);
  return suggestions
    ?.filter((item) => rx.test(item!.name!))
    ?.slice(0, maxSuggestions);
}

export type Props = Omit<BoxProps, 'onChange'> & {
  query: string;
  value?: Maybe<SuggestionType[]>;
  tagSize?: 'md' | 'lg' | 'sm';
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  styles: Record<string, RecursiveCSSObject<CSSWithMultiValues>>;
  suggestions?: SuggestionType[];
  minQueryLength?: number;
  placeholder?: string;
  onChange?: (tags: Maybe<SuggestionType[]>) => void;
  onChangeQuery: (query: string) => void;
};

type State = {
  focused: boolean;
  index: number;
};

export default class AutocompleteTagsBase extends Component<Props, State> {
  static defaultProps = {
    value: [],
    placeholder: '',
    suggestions: [],
    minQueryLength: 1,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      focused: false,
      index: -1,
    };
  }

  input = createRef<HTMLInputElement>();

  handleInputChange = () => {};

  handleBlur = () => {
    this.setState({ focused: false, index: -1 });
  };

  handleFocus = () => {
    this.setState({ focused: true });
  };

  handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    const { query, onChangeQuery } = this.props;
    if (q.length === query.length + 1 && KEYS.ENTER === q.slice(-1)) {
      this.pressDelimiter();
    } else if (q !== query) {
      onChangeQuery(q);
    }
  };

  handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const { query, value, suggestions } = this.props;
    const { index } = this.state;

    // when one of the terminating keys is pressed, add current query to the tags
    if (KEYS.ENTER === e.key) {
      if (query || index > -1) {
        e.preventDefault();
      }
      this.pressDelimiter();
    }

    // when backspace key is pressed and query is blank, delete the last tag
    if (e.key === KEYS.BACKSPACE && !query.length && value?.length) {
      this.deleteTag(value.length - 1);
    }

    const size = (suggestions?.length ?? 0) - 1;
    if (e.key === KEYS.UP_ARROW || e.key === KEYS.UP_ARROW_COMPAT) {
      e.preventDefault();
      this.setState({ index: index <= 0 ? size : index - 1 });
    }
    if (e.key === KEYS.DOWN_ARROW || e.key === KEYS.DOWN_ARROW_COMPAT) {
      e.preventDefault();
      this.setState({ index: index >= size ? 0 : index + 1 });
    }
  };

  handleClick = (evt: MouseEvent<HTMLInputElement>) => {
    if (document.activeElement !== evt.target) {
      this.input.current?.focus();
    }
  };

  handleAddTag = (tag: SuggestionType) => {
    this.addTag(tag);
    this.setState({ index: -1 });
    this.props.onChangeQuery('');
  };

  pressDelimiter() {
    const { query, minQueryLength, suggestions } = this.props;
    const { index } = this.state;

    if (query.length >= minQueryLength! && suggestions?.length) {
      // Check if the user typed in an existing suggestion.
      const match = suggestions.findIndex((o) =>
        matchExact(query).test(o.name!),
      );
      const ix = index === -1 ? match : index;
      if (ix > -1 && suggestions[ix]) {
        this.handleAddTag(suggestions[ix]);
      }
    }
  }

  addTag(tag: SuggestionType) {
    const { onChange, value } = this.props;
    if (!value?.some((t) => t?.id === tag.id)) {
      onChange?.([...(value ?? []), tag]);
    }
  }

  deleteTag = (index: number) => {
    const { value, onChange } = this.props;
    if (value) {
      onChange?.(remove(value, index));
    }
  };

  render() {
    const {
      query,
      value,
      tagSize,
      leftAddon,
      rightAddon,
      styles,
      suggestions,
      minQueryLength,
      placeholder,
      onChange,
      onChangeQuery: _,
      ...rest
    } = this.props;
    const { focused, index } = this.state;
    const expanded = !!focused && query.length >= minQueryLength!;

    return (
      <Box
        __css={styles.container}
        data-focus={focused ? true : undefined}
        onClick={this.handleClick}
        {...rest}
      >
        <Box __css={styles.tags} aria-relevant="additions" aria-live="polite">
          {leftAddon && <Box __css={styles.leftAddon}>{leftAddon}</Box>}
          {value?.map((tag, i) => (
            <SearchTag
              key={`${tag.id}-${i}`}
              suggestion={tag}
              index={i}
              onDelete={this.deleteTag}
              size={tagSize}
            />
          ))}
        </Box>
        <Box __css={styles.inner}>
          <chakra.input
            __css={styles?.input}
            ref={this.input}
            value={query}
            onInput={this.handleInput}
            onKeyDown={this.handleKeyDown}
            onChange={this.handleInputChange}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            {...getAutocompleteA11yProps(query, placeholder!, expanded, index)}
          />
          {expanded && !!suggestions?.length && (
            <Box __css={styles.suggestions} as="ul" role="listbox" zIndex={3}>
              {suggestions.map((item, ix) => (
                <Suggestion
                  key={`${item.id}-${item.category}`}
                  styles={styles.suggestion}
                  suggestion={item}
                  query={query}
                  active={ix === index}
                  onAdd={this.handleAddTag}
                />
              ))}
            </Box>
          )}
        </Box>
        {rightAddon}
      </Box>
    );
  }
}
