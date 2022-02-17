import AppLoader from './components/app/AppLoader';
import NotFoundPage from './components/app/NotFoundPage';

import InfinitListContainer from './components/containers/InfinitListContainer';
import { Modal, ModalClose, ModalPrimary } from './components/containers/Modal';

import * as Appbar from './components/app/Appbar';
import * as Page from './components/app/Page';
import * as Sidebar from './components/app/Sidebar';

import {
  LearnerAvatar,
  LearnerAvatarLabel,
} from './components/tokens/LearnerAvatar';
import { LearnerTabLink, LearnerTab } from './components/tokens/LearnerTab';
import * as ResourceCard from './components/tokens/ResourceCard';
import * as ResourceLoading from './components/tokens/ResourceCardLoading';
import ResourcesGrid, {
  DEFAULT_PAGE_SIZE,
} from './components/tokens/ResourcesGrid';
import LearnerDropdown from './components/tokens/LearnerDropdown';
import WeekdayButton from './components/tokens/WeekdayButton';

import * as MultiProgress from './components/common/MultiProgressBar';
import Tag from './components/common/Tag';
import IcontBtn from './components/common/IcontBtn';
import { NavLink, NavLinks } from './components/common/NavLinks';
import DateSelect from './components/common/DateSelect';
import {
  AutocompleteTagsBase,
  type AutocompleteTagsBaseProps,
  AutocompleteTagsLocal,
  type AutocompleteTagsLocalProps,
  type SuggestionType,
  getAutocompleteA11yProps,
} from './components/common/Autocomplete';
import TagsList from './components/common/TagsList';

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
  ResourceCard,
  ResourcesGrid,
  DEFAULT_PAGE_SIZE,
  ResourceLoading,
  LearnerAvatar,
  LearnerAvatarLabel,
  LearnerTab,
  LearnerTabLink,
  LearnerDropdown,
  WeekdayButton,
  // common
  DateSelect,
  IcontBtn,
  MultiProgress,
  NavLink,
  NavLinks,
  TagsList,
  Tag,
  AutocompleteTagsBase,
  type AutocompleteTagsBaseProps,
  AutocompleteTagsLocal,
  type AutocompleteTagsLocalProps,
  type SuggestionType,
  getAutocompleteA11yProps,
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
