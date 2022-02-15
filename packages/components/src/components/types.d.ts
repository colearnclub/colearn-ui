export type Maybe<T> = T | null;

export enum CategoryType {
  About = 'about',
  Academy = 'academy',
  AccomodationZone = 'accomodationZone',
  Age = 'age',
  AptitudeZone = 'aptitudeZone',
  Connect = 'connect',
  DirectionZone = 'directionZone',
  GeniusZone = 'geniusZone',
  Grade = 'grade',
  HookZone = 'hookZone',
  IndependenceZone = 'independenceZone',
  Location = 'location',
  PassionZone = 'passionZone',
  PersistenceZone = 'persistenceZone',
  PresenceZone = 'presenceZone',
  Recommendation = 'recommendation',
  Strategies = 'strategies',
  TogethernessZone = 'togethernessZone',
}

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
  first?: Maybe<number>;
  offset?: Maybe<number>;
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

export type Tag = {
  __typename?: 'Tag';
  ancestorLabels?: Maybe<Maybe<string>[]>;
  category?: Maybe<CategoryType>;
  id: string;
  name: string;
  visible?: Maybe<boolean>;
};
