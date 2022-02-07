import { colW } from '../constants';

const PlannerBlocksSlot = {
  parts: ['container', 'inner', 'footer', 'button'],
  baseStyle: {
    container: {
      px: '0.25rem',
      py: '0.5rem',
      bg: '#fafafa',
      _hover: {
        bg: '#f1f1f1',
        "button[aria-label='icon-btn-add']": {
          visibility: 'visible',
        },
      },
      _selected: {
        bg: '#f1f1f1',
      },
    },
    inner: {
      minH: '4.5rem',
    },
    footer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      visibility: 'hidden',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      outline: 0,
      _hover: {
        '.path-circle': {
          fill: 'c-orange.200',
        },
        '.path-cross': {
          stroke: 'c-orange.200',
        },
      },
    },
  },
  variants: {
    anytime: {
      container: {
        px: '0',
      },
      inner: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        '> *': {
          mx: '0.25rem',
          mb: '0.5rem',
          w: `${colW}!important`,
        },
      },
      footer: {
        py: '1.125rem',
      },
    },
    day: {
      container: {
        w: colW,
        display: 'flex',
        flexDirection: 'column',
        borderLeft: 'solid 1px #e4e4e4',
        _first: { borderLeft: 'none' },
      },
      inner: {
        flexGrow: '1',
        '> *': {
          mb: '0.5rem',
          _last: { mb: '0' },
        },
      },
      footer: {
        pt: '0.75rem',
        pb: '0.25rem',
      },
    },
    week: {
      container: {
        w: 'calc(50% - 1.25rem)',
        mx: '0.625rem',
        px: '1.25rem',
        py: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '0.5rem',
        border: '1px solid #e5e5e5',
      },
      inner: {
        flexGrow: '1',
        '> *': {
          mb: '0.5rem',
          _last: { mb: '0' },
        },
      },
      footer: {
        pt: '2.5rem',
      },
    },
    sidebar: {
      container: {
        bg: 'transparent',
        py: '0',
        px: '0.75rem',
        my: '0.75rem',
        flexGrow: 1,
        overflowY: 'auto',
        _hover: {
          bg: 'transparent',
        },
        _selected: {
          bg: 'rgb(223, 242, 244)',
        },
      },
      inner: {
        '> *': {
          mb: '0.5rem',
        },
      },
    },
  },
  defaultProps: {
    variant: 'day',
  },
};
export default PlannerBlocksSlot;
