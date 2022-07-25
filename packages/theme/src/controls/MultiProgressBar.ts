const MultiProgressBar = {
  parts: ['container', 'progress', 'bonus'],
  baseStyle: {
    container: {
      bg: '#f6f6f6',
      borderRadius: '0.25rem',
      pos: 'relative',
    },
    progress: {
      pos: 'absolute',
      display: 'flex',
      alignItems: 'center',
      left: '0',
      top: '0',
      bottom: '0',
      bg: '#f6f6f6',
      borderRadius: '0.25rem',
      color: 'white',
      fontSize: '0.75rem',
      fontWeight: '500',
      textAlign: 'right',
      width: '0%',
      transition: 'width 0.25s ease-out',
    },
    bonus: {
      pos: 'absolute',
      right: 0,
      border: '1px solid #f6f6f6',
      borderRadius: '0.25rem',
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderLeft: 0,
      background: 'white',
      height: '100%',
      color: 'white',
      fontSize: '0.75rem',
      fontWeight: '500',
      textAlign: 'right',
      width: '0%',
      transition: 'width 0.25s ease-out',
    },
  },
  sizes: {
    lg: {
      container: {
        h: '2.5rem',
      },
    },
    md: {
      container: {
        h: '1.75rem',
      },
    },
    sm: {
      container: {
        h: '1rem',
      },
    },
  },
  defaultProps: {
    size: 'md',
  },
};

export default MultiProgressBar;
