import { useEffect, useState } from 'react';

export const withMotionQuery = '(prefers-reduced-motion: no-preference)';
export const withoutMotionQuery = '(prefers-reduced-motion: reduce)';
export const reducedDataQuery = '(prefers-reduced-data: reduce)';
export const reducedTransparencyQuery =
  '(prefers-reduced-transparency: reduce)';
export const darkModeQuery = '(prefers-color-scheme: dark)';
export const lightModeQuery = '(prefers-color-scheme: light)';

export default function useMatchMedia(
  query: string,
  defaultValue = false,
): boolean {
  const [matches, setMatches] = useState(defaultValue);

  useEffect(() => {
    const q = window.matchMedia(query);
    const onChange = (evt: MediaQueryListEvent | MediaQueryList) =>
      setMatches(evt.matches);
    onChange(q);
    q.addListener(onChange);
    return () => {
      q.removeListener(onChange);
    };
  }, [query]);

  return matches;
}
