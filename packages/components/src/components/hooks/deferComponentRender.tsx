import { ComponentType, FC, useLayoutEffect, useState } from 'react';

export default function deferComponentRender<P>(
  WrappedComponent: ComponentType<P>,
): FC<P> {
  function DeferredRenderWrapper(props: P) {
    const [render, setRender] = useState(false);

    useLayoutEffect(() => {
      const handle = window.requestAnimationFrame(() => {
        setRender(true);
      });
      return () => {
        window.cancelAnimationFrame(handle);
      };
    }, []);

    return render ? <WrappedComponent {...props} /> : null;
  }
  return DeferredRenderWrapper;
}
