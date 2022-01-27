import { extendTheme } from '@chakra-ui/react';

import Checkbox from './controls/Checkbox';
import Modal from './controls/Modal';
import Popover from './controls/Popover';
import Tag from './controls/Tag';
import Avatar from './controls/Avatar';
import { Input, Textarea } from './controls/Input';
import Button from './controls/Button';
import Select from './controls/Select';
import Radio from './controls/Radio';
import FormLabel from './controls/FormLabel';
import Menu from './controls/Menu';
import Progress from './controls/Progress';
import AutocompleteTags from './controls/AutocompleteTags';
import ResourceCard from './controls/ResourceCard';
import NavLinks from './controls/NavLinks';
import LearnerTab from './controls/LearnerTab';
import PlannerHeader from './controls/PlannerHeader';
import PlannerBlock from './controls/PlannerBlock';
import PlannerBlocksSlot from './controls/PlannerBlocksSlot';
import WeekdayButton from './controls/WeekdayButton';
import MultiProgressBar from './controls/MultiProgressBar';

const appTheme = extendTheme({
  components: {
    Checkbox,
    Popover,
    Avatar,
    Modal,
    Tag,
    Input,
    FormLabel,
    Textarea,
    Button,
    Select,
    Radio,
    Menu,
    Progress,
    AutocompleteTags,
    ResourceCard,
    NavLinks,
    LearnerTab,
    PlannerHeader,
    PlannerBlock,
    PlannerBlocksSlot,
    WeekdayButton,
    MultiProgressBar,
  },
  textSyles,
  fonts: {
    body: "'FilsonSoft', sans-serif",
    heading: "'FilsonSoft', sans-serif",
  },
  shadows: {
    sm: '2px 2px 3px rgba(53, 65, 68, 0.15)',
    md: '0 4px 16px 4px rgba(0, 0, 0, 0.2)',
  },
  colors: {
    bg: {
      100: '#F5FAFB',
      200: '#FAFAFA',
      300: '#F1F1F1',
      400: '#DFF2F4',
      500: '#f6f6f6',
      800: '#29879C',
      900: '#177084',
    },
    'c-orange': {
      200: '#ee682a',
      500: '#ef6829',
      600: '#f38754',
    },
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
    progress: {
      200: '#52de63',
      500: '#52de63',
    },
    green1: {
      100: '#27a02e',
      200: '#27a02e',
      300: '#27a02e',
      400: '#27a02e',
      500: '#27a02e',
      600: '#27a02e',
      700: '#27a02e',
      800: '#27a02e',
      900: '#27a02e',
    },
  },
});
export default appTheme;
