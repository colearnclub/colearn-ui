const ResourceCard = {
  parts: ['container', 'header', 'ages', 'content', 'actions', 'image'],
  baseStyle: {
    container: {
      display: 'inline-flex',
      flexDir: 'column',
      justifyItems: 'flex-start',
      verticalAlign: 'top',
      h: '14.375rem',
      maxH: '14.375rem',
      minH: '14.375rem',
      w: '13.75rem',
      minW: '13.75rem',
      maxW: '13.75rem',
      bg: 'white',
      boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.1)',
      borderRadius: '0.875rem',
      whiteSpace: 'normal',
    },
    header: {
      color: '#313131',
      lineHeight: '1.13',
      fontSize: '1rem',
      fontWeight: '500',
    },
    ages: {
      mt: '0.25rem',
      color: '#61767b',
      fontSize: '0.875rem',
      fontWeight: '500',
    },
    content: {
      px: '1.25rem',
      flexGrow: 1,
      py: '0.75rem',
      h: '4.75rem',
      cursor: 'pointer',
    },
    actions: {
      h: '3rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      px: '1.125rem',
      boxSizing: 'border-box',
      borderTop: '1px solid #ececec',
    },
    image: {
      width: '100%',
      objectFit: 'cover',
      bg: 'transparent',
      height: '6.5rem',
      cursor: 'pointer',
      borderTopLeftRadius: '0.875rem',
      borderTopRightRadius: '0.875rem',
      border: 'none',
    },
  },
  defaultProps: {
    variant: 'card',
  },
  variants: {
    'card-tall': {
      container: {
        h: '18.125rem',
        maxH: '18.125rem',
        minH: '18.125rem',
      },
    },
    modal: {},
  },
};
export default ResourceCard;
