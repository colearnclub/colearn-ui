import AppLoader from './components/app/AppLoader';
import NotFoundPage from './components/app/NotFoundPage';

import InfinitListContainer from './components/containers/InfinitListContainer';
import { Modal, ModalClose, ModalPrimary } from './components/containers/Modal';

import * as Appbar from './components/app/Appbar';
import * as Page from './components/app/Page';
import * as Sidebar from './components/app/Sidebar';
import * as MultiProgress from './components/tokens/MultiProgressBar';

import {
  LearnerAvatar,
  LearnerAvatarLabel,
} from './components/tokens/LearnerAvatar';
import { LearnerTabLink, LearnerTab } from './components/tokens/LearnerTab';

import IcontBtn from './components/tokens/IcontBtn';
import Tag from './components/tokens/Tag';

import { NavLink, NavLinks } from './components/tokens/NavLinks';

import useDebouncedValue from './components/hooks/useDebouncedValue';
import useDelay from './components/hooks/useDelay';
import useDimenstionsObserver from './components/hooks/useDimenstionsObserver';
import useDocumentTitle from './components/hooks/useDocumentTitle';
import useEntitiesMap from './components/hooks/useEntitiesMap';
import useEntitySelect from './components/hooks/useEntitySelect';
import useHorizonralScrollAnimation from './components/hooks/useHorizonralScrollAnimation';
import useInfinitePageScroll from './components/hooks/useInfinitePageScroll';
import useMatchMedia from './components/hooks/useMatchMedia';
import usePrevious from './components/hooks/usePrevious';
import useQueryParams from './components/hooks/useQueryParams';
import useScrollTop from './components/hooks/useScrollTop';
import { useErrorToast, useSuccessToast } from './components/hooks/useToasts';
import deferComponentRender from './components/hooks/deferComponentRender';
import { randomColorFromList, colors, subjectColors } from './utils/colorUtils';

import {
  linear as linearAnim,
  ease as easeAnim,
  easeIn as easeInAnim,
  easeOut as easeOutAnim,
  easeInOut as easeInOutAnim,
  cubicBezier as cubicBezierAnim,
} from './animation/bezier';

import useSyncedState, {
  useOnceSyncedState,
} from './components/hooks/useSyncedState';
import {
  whyDidYouUpdate,
  useWhyDidYouUpdate,
} from './components/hooks/whyDidYouUpdate';

export {
  // app
  Appbar,
  Sidebar,
  AppLoader,
  NotFoundPage,
  Page,
  // containers
  InfinitListContainer,
  Modal,
  ModalClose,
  ModalPrimary,
  // tokens
  LearnerAvatar,
  LearnerAvatarLabel,
  LearnerTab,
  LearnerTabLink,
  IcontBtn,
  MultiProgress,
  NavLink,
  NavLinks,
  Tag,
  // hooks
  useDebouncedValue,
  useDelay,
  useDimenstionsObserver,
  useDocumentTitle,
  useEntitiesMap,
  useEntitySelect,
  useHorizonralScrollAnimation,
  useInfinitePageScroll,
  useMatchMedia,
  usePrevious,
  useQueryParams,
  useScrollTop,
  useSyncedState,
  useOnceSyncedState,
  useErrorToast,
  useSuccessToast,
  whyDidYouUpdate,
  //hoc's
  useWhyDidYouUpdate,
  deferComponentRender,
  //utils
  randomColorFromList,
  colors,
  subjectColors,
  linearAnim,
  easeAnim,
  easeInAnim,
  easeOutAnim,
  easeInOutAnim,
  cubicBezierAnim,
};
