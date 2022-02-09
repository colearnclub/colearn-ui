import { useState, useCallback } from 'react';

export default function useEntitySelect<T>(
  initial: T | null = null,
): [T | null, (r: T) => void, () => void] {
  const [selected, setSelected] = useState<T | null>(initial);
  const select = useCallback((e: T) => setSelected(e), []);
  const unselect = useCallback(() => setSelected(null), []);
  return [selected, select, unselect];
}
