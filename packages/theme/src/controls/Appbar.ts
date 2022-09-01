const Appbar = {
  parts: ['container', 'inner'],
  baseStyle: {
    container: {
      bg: 'white',
      h: '3.125rem',
      borderBottom: '1px',
      borderBottomColor: 'rgba(92, 164, 175, 0.15)',
      zIndex: 15,
    },
    inner: {
      display: 'flex',
      px: { md: '1.25rem' },
      pr: '0.5rem',

      boxSizing: 'border-box',
      alignItems: 'center',
      h: '100%',
    },
  },
};

export default Appbar;
