import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import usePrevious from './usePrevious';

function identity<T>(val: any) {
  return val as T;
}

export default function useSyncedState<T, U>(
  prop: U | undefined,
  transform: (val?: U) => T | undefined = identity,
): [T | undefined, Dispatch<SetStateAction<T | undefined>>] {
  const [state, setState] = useState<T | undefined>(transform(prop));

  useEffect(() => {
    setState(transform(prop));
  }, [prop, transform]);

  return [state, setState];
}

export function useOnceSyncedState<T, U>(
  prop: U | undefined,
  transform: (val?: U) => T | undefined = identity,
): [T | undefined, Dispatch<SetStateAction<T | undefined>>] {
  const prev = usePrevious(prop);
  const [state, setState] = useState<T | undefined>(transform(prop));

  useEffect(() => {
    if (!prev && prop) {
      setState(transform(prop));
    }
  }, [prop, prev, transform]);

  return [state, setState];
}
