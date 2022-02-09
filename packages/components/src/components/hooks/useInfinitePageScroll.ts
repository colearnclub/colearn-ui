import { MutableRefObject, useRef, useLayoutEffect } from 'react';

export default function useInfinitePageScroll<T extends HTMLElement>(
  hasMore: boolean,
  onFetchMore?: () => any,
  distance = 150,
): MutableRefObject<T | null> {
  const loaderRef = useRef<T | null>(null);

  useLayoutEffect(() => {
    if (!loaderRef.current || !hasMore) {
      return;
    }

    const options = {
      root: null,
      rootMargin: `0px 0px ${distance}px 0px`,
    };

    let previousY: number | undefined;
    let previousRatio = 0;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        ({ isIntersecting, intersectionRatio, boundingClientRect = {} }) => {
          const { y } = boundingClientRect;
          if (
            isIntersecting &&
            intersectionRatio >= previousRatio &&
            (!previousY || (y || 0) < previousY)
          ) {
            onFetchMore?.();
          }
          previousY = y;
          previousRatio = intersectionRatio;
        },
      );
    }, options);
    observer.observe(loaderRef.current);
    return () => {
      observer.disconnect();
    };
  }, [onFetchMore, hasMore, distance]);

  return loaderRef;
}
