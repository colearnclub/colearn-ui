export type Maybe<T> = T | null;

export type PageCursor = {
  after?: Maybe<string>;
  first?: Maybe<number>;
};

export type PageCursorInfo = {
  __typename?: 'PageCursorInfo';
  endCursor?: Maybe<string>;
  hasNextPage?: Maybe<boolean>;
};

export type PageOffset = {
  first?: InputMaybe<number>;
  offset?: InputMaybe<number>;
};

export type PageOffsetInfo = {
  __typename?: 'PageOffsetInfo';
  hasNextPage?: Maybe<boolean>;
  limit?: Maybe<number>;
  offset?: Maybe<number>;
};

export type LearnerAttributes = {
  __typename?: 'LearnerAttributes';
  avatar?: Maybe<string>;
  birthDate?: Maybe<string>;
};

export type Learner = {
  __typename?: 'Learner';
  id: string;
  uuid?: Maybe<string>;
  name: string;
  userId?: Maybe<string>;
  attributes?: Maybe<LearnerAttributes>;
};
