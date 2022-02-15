import { CategoryType, Maybe } from '../../types';

export type SuggestionType = {
  id: string;
  name: string;
  category?: Maybe<CategoryType>;
  iconUrl?: string;
  type?: 'tag' | 'source';
};
