import AppLoader from './components/app/AppLoader';
import NotFoundPage from './components/app/NotFoundPage';

import InfinitListContainer from './components/containers/InfinitListContainer';
import { Modal, ModalClose, ModalPrimary } from './components/containers/Modal';

import * as Appbar from './components/app/Appbar';
import * as Page from './components/app/Page';
import * as Sidebar from './components/app/Sidebar';

import { AvatarLabel } from './components/tokens/AvatarLabel';
import { avatarProps } from './components/tokens/avatar';

import { PersonTab } from './components/tokens/PersonTab';
import {
  PersonTabLink,
  PersonTabLinks,
} from './components/tokens/PersonTabLinks';
import * as ResourceCard from './components/tokens/ResourceCard';
import * as ResourceLoading from './components/tokens/ResourceCardLoading';
import ResourcesGrid, {
  DEFAULT_PAGE_SIZE,
} from './components/tokens/ResourcesGrid';
import PersonDropdown from './components/tokens/PersonDropdown';
import WeekdayButton from './components/tokens/WeekdayButton';

import * as MultiProgress from './components/common/MultiProgressBar';
import Tag from './components/common/Tag';
import IcontBtn from './components/common/IcontBtn';
import { NavLink, NavLinks, NavLinkItem } from './components/common/NavLinks';
import AppbarNavLinksMenu from './components/common/AppbarNavLinksMenu';
import DateSelect from './components/common/DateSelect';
import {
  AutocompleteTagsBase,
  type AutocompleteTagsBaseProps,
  AutocompleteTagsLocal,
  type AutocompleteTagsLocalProps,
  type SuggestionType,
  getAutocompleteA11yProps,
} from './components/common/Autocomplete';
import TagsList from './components/tokens/TagsList';

import useDebouncedValue from './components/hooks/useDebouncedValue';
import useDelay from './components/hooks/useDelay';
import useDimenstionsObserver from './components/hooks/useDimenstionsObserver';
import useDocumentTitle from './components/hooks/useDocumentTitle';
import {
  useEntitiesMap,
  useKeyedEntitiesMap,
} from './components/hooks/useEntitiesMap';
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

import MembersSelect from './components/tokens/MembersSelect';
import MembersAutoComplete from './components/tokens/MembersAutoComplete';
import PersonCardBlock from './components/tokens/PersonCardBlock';

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
import useMultipleMatch from './components/hooks/useMultipleMatch';

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
  avatarProps,
  AvatarLabel,
  PersonTabLink,
  PersonTabLinks,
  PersonTab,
  PersonDropdown,
  WeekdayButton,
  MembersSelect,
  MembersAutoComplete,
  PersonCardBlock,
  // common
  DateSelect,
  IcontBtn,
  MultiProgress,
  NavLink,
  NavLinkItem,
  NavLinks,
  AppbarNavLinksMenu,
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
  useKeyedEntitiesMap,
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
  useMultipleMatch,
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
