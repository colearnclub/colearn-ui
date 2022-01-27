const Tag = {
  baseStyle: {
    label: {
      fontWeight: '500',
    },
    closeButton: {
      _active: {
        bg: 'transparent',
        boxShadow: 'none',
      },
    },
  },
  variants: {
    outline: {
      container: {
        boxShadow: 'inset 0 0 0px 1px #3699ae;',
        color: '#3699ae',
      },
    },
    resource: {
      container: {
        bg: '#cfe6eb',
        color: '#7fb7c4',
        _hover: {
          bg: '#86c2ce',
          color: 'white',
        },
      },
    },
  },
  sizes: {
    md: {
      container: {
        minH: '1.75rem',
        minW: '1.75rem',
        px: '0.625rem',
        fontSize: '0.75rem',
        borderRadius: '3px',
      },
    },
    lg: {
      container: {
        minH: '2rem',
        minW: '2rem',
        px: '0.625rem',
        fontSize: '0.75rem',
        borderRadius: '3px',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'resource',
  },
};

export default Tag;
