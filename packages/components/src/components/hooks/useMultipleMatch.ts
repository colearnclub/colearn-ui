import { useMemo } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

type MultipleMatchProps = {
  path: string;
  matchTo?: string | string[];
  end?: boolean;
};

export default function useMultipleMatch({
  path,
  matchTo,
  end,
}: MultipleMatchProps) {
  const { pathname } = useLocation();
  return useMemo(() => {
    let paths: string[];
    if (matchTo) {
      if (Array.isArray(matchTo)) {
        paths = matchTo;
      } else {
        paths = [matchTo];
      }
    } else {
      paths = [path];
    }
    for (const p of paths) {
      const match = matchPath({ path: p, end }, pathname);
      if (match) {
        return match;
      }
    }
    return undefined;
  }, [pathname, matchTo, end, path]);
}
