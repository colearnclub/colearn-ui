import { useMemo } from 'react';
import { Maybe } from '../types';

export function useEntitiesMap<T extends { id?: Maybe<string> }>(
  entites?: Maybe<Maybe<T | undefined>[]>,
): Map<string, Maybe<T | undefined>> {
  return useMemo(
    () => new Map(entites?.map((l) => [l?.id!, l]) ?? []),
    [entites],
  );
}

export function useKeyedEntitiesMap<T extends Record<any, any>>(
  entites?: Maybe<Maybe<T | undefined>[]>,
  idselect: (t?: Maybe<T>) => string = (t) => (t?.['id'] ?? '') as string,
): Map<string, T> {
  return useMemo(
    () => new Map(entites?.map((l) => [idselect(l), l!]) ?? []),
    [entites, idselect],
  );
}
