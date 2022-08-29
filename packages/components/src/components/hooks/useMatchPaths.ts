import { useMemo } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

export default function useMatchPaths<
  T extends { to: string; matchTo?: string },
>(paths?: T[]) {
  let { pathname } = useLocation();
  const match = useMemo(
    () => paths?.find((p) => matchPath(p.matchTo || p.to, pathname)),
    [paths, pathname],
  );
  return match;
}
