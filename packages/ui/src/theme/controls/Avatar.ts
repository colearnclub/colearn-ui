const Avatar = {
  baseStyle: {
    container: {
      color: 'white',
      cursor: 'pointer',
      fontWeight: '500',
      borderColor: 'transparent',
    },
  },
  sizes: {
    xs: {
      container: {
        width: '1.5rem',
        height: '1.5rem',
      },
      excessLabel: {
        width: '1.5rem',
        height: '1.5rem',
      },
      label: {
        fontSize: '0.875rem',
      },
    },
    sm: {
      container: {
        width: '2rem',
        height: '2rem',
      },
      excessLabel: {
        width: '2rem',
        height: '2rem',
      },
      label: {
        fontSize: '1rem',
      },
    },
    md: {
      container: {
        width: '2.25rem',
        height: '2.25rem',
      },
      excessLabel: {
        width: '2.25rem',
        height: '2.25rem',
      },
      label: {
        fontSize: '1rem',
      },
    },
    lg: {
      container: {
        width: '2.5rem',
        height: '2.5rem',
      },
      excessLabel: {
        width: '2.5rem',
        height: '2.5rem',
      },
      label: {
        fontSize: '1.25rem',
      },
    },
    xl: {
      container: {
        width: '3.125rem',
        height: '3.125rem',
      },
      excessLabel: {
        width: '3.125rem',
        height: '3.125rem',
      },
      label: {
        fontSize: '1.25rem',
      },
    },
  },
  defaultProps: {
    size: 'sm',
  },
};

export default Avatar;
