const AutocompleteTags = {
  parts: ['input', 'container', 'suggestions', 'suggestion'],
  baseStyle: {
    container: {
      bg: 'white',
      boxSizing: 'border-box',
      borderRadius: '0.25rem',
      pos: 'relative',
      px: '0.5rem',
      pb: '0.25rem',
      border: '1px solid #e4e4e4',
      _focus: {
        borderColor: 'rgb(49, 130, 206)',
      },
    },
    leftAddon: {
      position: 'relative',
      display: 'inline-block',
      pr: '0.5rem',
      pl: '0.25rem',
      '> *': {
        display: 'inline-block',
        verticalAlign: 'center',
      },
    },
    tags: {
      display: 'inline',
      '> *': {
        mt: '0.25rem',
        mr: '0.25rem',
      },
    },
    inner: {
      position: 'relative',
      display: 'inline-block',
    },
    input: {
      pl: '2px',
      boxSizing: 'content-box',
      outline: 0,
      _focus: {
        border: 'none',
        boxShadow: 'none',
      },
    },
    suggestions: {
      top: 'calc(100% + 0.7rem)',
      pos: 'absolute',
      left: '0',
      bg: 'white',
      py: '0.2rem',
      boxShadow: 'sm',
    },
    suggestion: {
      fontSize: 'md',
      px: '0.75rem',
      py: '0.3rem',
      cursor: 'pointer',
      _hover: {
        bg: 'gray.200',
      },
      mark: {
        backgroundColor: 'transparent',
        fontWeight: '600',
      },
      _selected: {
        bg: 'gray.200',
      },
    },
  },
  variants: {
    'single-line': {
      tags: {},
    },
  },
  sizes: {
    lg: {
      input: {
        lineHeight: '2rem',
      },
      leftAddon: {
        h: '2rem',
        lineHeight: '2rem',
      },
    },
    md: {
      input: {
        lineHeight: '1.75rem',
      },
      leftAddon: {
        h: '1.75rem',
        lineHeight: '1.75rem',
        minW: '1.75rem',
      },
    },
  },
  defaultProps: {
    variant: 'resource',
    size: 'md',
  },
};

export default AutocompleteTags;
