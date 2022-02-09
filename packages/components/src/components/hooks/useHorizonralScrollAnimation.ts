import { useRef, useCallback, MutableRefObject } from 'react';

import { Animation, AccellerationFn } from '../../animation/Animation';
import { easeInOut } from '../../animation/bezier';

type ReturnType<T> = {
  ref: MutableRefObject<T | null>;
  scroll: (shift: number) => void;
  scrollLeft: () => void;
  scrollRight: () => void;
};

export default function useHorizonralScrollAnimation<T extends HTMLElement>(
  shiftDelta: number = 500,
  duration: number = 250,
  timingFn: AccellerationFn = easeInOut,
): ReturnType<T> {
  const ref = useRef<T | null>(null);
  const anim = useRef(new Animation());

  const scroll = useCallback(
    (shift: number) => {
      const from = ref?.current?.scrollLeft ?? 0;
      const tick = (v: number) => {
        if (ref?.current) {
          ref.current.scrollLeft = v;
        }
      };
      anim.current?.start(
        'scroll',
        from,
        from + shift,
        duration,
        tick,
        easeInOut,
      );
    },
    [duration],
  );
  const scrollLeft = useCallback(
    () => scroll(-1 * shiftDelta),
    [scroll, shiftDelta],
  );
  const scrollRight = useCallback(
    () => scroll(shiftDelta),
    [scroll, shiftDelta],
  );

  return { ref, scroll, scrollLeft, scrollRight };
}
