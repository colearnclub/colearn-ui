import { useMemo } from 'react';
import { Maybe } from '../types';

export default function useEntitiesMap<T extends { id?: Maybe<string> }>(
  entites?: Maybe<Maybe<T | undefined>[]>,
): Map<string, Maybe<T | undefined>> {
  return useMemo(
    () => new Map(entites?.map((l) => [l?.id!, l]) ?? []),
    [entites],
  );
}
