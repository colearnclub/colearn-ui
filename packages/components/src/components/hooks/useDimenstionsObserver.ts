import { MutableRefObject, useLayoutEffect, useState } from 'react';
import { Maybe } from '../types';

type Dimenstions = {
  width: number;
  height: number;
};

export default function useDimenstionsObserver<T extends HTMLElement>(
  ref: MutableRefObject<T | undefined | null>,
): Dimenstions | null {
  const [dimensions, setDimensions] = useState<Maybe<Dimenstions>>(null);
  useLayoutEffect(() => {
    if (ref.current) {
      const height = ref.current.clientHeight;
      const width = ref.current.clientWidth;
      setDimensions({ width, height });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return dimensions;
}
