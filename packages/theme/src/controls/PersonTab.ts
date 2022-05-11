const PersonTab = {
  parts: ['container', 'avatar', 'label'],
  baseStyle: {
    container: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      pl: '4px',
      pr: '1rem',
      mr: '0.5rem',
      boxSizing: 'content-box',
      border: '1px solid transparent',
      bg: 'white',
      color: '#313131',
      _selected: {
        bg: '#ee682a',
        color: 'white',
      },
      _hover: {
        bg: '#ee682a',
        color: 'white',
      },
    },
    label: {
      color: undefined,
    },
  },
  sizes: {
    md: {
      container: {
        h: '2.75rem',
        borderRadius: '1.375rem',
      },
    },
  },
  variants: {
    outline: {
      container: {
        borderColor: '#e4e4e4',
      },
    },
    'outline-truncated': {
      container: {
        borderColor: '#e4e4e4',
      },
      label: {
        isTruncated: true,
      },
    },
  },
};

export default PersonTab;
