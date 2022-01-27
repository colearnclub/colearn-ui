const Popover = {
  parts: ['popper', 'content', 'header', 'body', 'footer', 'arrow'],
  baseStyle: {
    content: {
      border: 'none',
      _focus: {
        boxShadow: 'md',
        outline: 0,
      },
    },
  },
  variants: {
    'avatar-select': {
      content: {
        px: '0',
        py: '0',
        minW: '20rem',
      },
      header: {
        color: '#313131',
        borderBottom: '0',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        lineHeight: 'normal',
        px: '1.75rem',
        pt: '1.5rem',
      },
      body: {
        display: 'grid',
        px: '1.75rem',
        mb: '0',
        pt: '1.5rem',
        pb: '3.125rem',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridColumnGap: '0.75rem',
        gridRowGap: '1rem',
      },
    },
    'accounts-list': {
      content: {
        border: 'none',
        _focus: {
          // top: '40px',
          borderTopLeftRadius: '0',
          border: 'none',
        },
      },
    },
  },
};

export default Popover;
