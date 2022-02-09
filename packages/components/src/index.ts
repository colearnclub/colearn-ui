import AppLoader from './components/app/AppLoader';

import useDebouncedValue from './components/hooks/useDebouncedValue';
import useDelay from './components/hooks/useDelay';
import useDimenstionsObserver from './components/hooks/useDimenstionsObserver';
import useDocumentTitle from './components/hooks/useDocumentTitle';
import useEntitiesMap from './components/hooks/useEntitiesMap';
import useEntitySelect from './components/hooks/useEntitySelect';
import useInfinitePageScroll from './components/hooks/useInfinitePageScroll';
import useMatchMedia from './components/hooks/useMatchMedia';
import usePrevious from './components/hooks/usePrevious';
import { useErrorToast, useSuccessToast } from './components/hooks/useToasts';
import useSyncedState, {
  useOnceSyncedState,
} from './components/hooks/useSyncedState';
import {
  whyDidYouUpdate,
  useWhyDidYouUpdate,
} from './components/hooks/whyDidYouUpdate';

export {
  // app
  AppLoader,
  // hooks
  useDebouncedValue,
  useDelay,
  useDimenstionsObserver,
  useDocumentTitle,
  useEntitiesMap,
  useEntitySelect,
  useInfinitePageScroll,
  useMatchMedia,
  usePrevious,
  useSyncedState,
  useOnceSyncedState,
  useErrorToast,
  useSuccessToast,
  whyDidYouUpdate,
  useWhyDidYouUpdate,
};
