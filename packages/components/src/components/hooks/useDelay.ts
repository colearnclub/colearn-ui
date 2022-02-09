import { useState, useLayoutEffect } from 'react';

export default function useDelay(delay: number): boolean {
  const [passed, setPassed] = useState(false);

  useLayoutEffect(() => {
    const t = setTimeout(() => setPassed(true), delay);
    return () => {
      clearTimeout(t);
    };
  }, [delay]);
  return passed;
}
