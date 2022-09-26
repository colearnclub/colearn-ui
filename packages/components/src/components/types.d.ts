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
  endCursor?: Maybe<string>;
  hasNextPage?: Maybe<boolean>;
};

export type PageOffset = {
  first?: Maybe<number>;
  offset?: Maybe<number>;
};

export type PageOffsetInfo = {
  hasNextPage?: Maybe<boolean>;
  limit?: Maybe<number>;
  offset?: Maybe<number>;
};

export type Person = {
  avatar?: Maybe<string>;
  firstName?: Maybe<string>;
  id: string;
  lastName?: Maybe<string>;
  email?: Maybe<string>;
  userId?: Maybe<string>;
};

export type PersonMembership = {
  id: string;
  person?: Maybe<Person>;
  personId: string;
};

export type Tag = {
  __typename?: 'Tag';
  ancestorLabels?: Maybe<Maybe<string>[]>;
  category?: Maybe<CategoryType>;
  id: string;
  name: string;
  visible?: Maybe<boolean>;
};
