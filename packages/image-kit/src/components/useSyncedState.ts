import { Dispatch, SetStateAction, useState, useEffect } from 'react';

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
