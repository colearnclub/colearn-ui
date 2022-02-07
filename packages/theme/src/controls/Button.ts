const Button = {
  baseStyle: {
    fontWeight: '700',
    _focus: {
      boxShadow: 'none',
    },
  },
  variants: {
    outline: {
      borderWidth: '3px',
    },
    'dropdown-menu': {
      bg: 'white',
      color: '#354144',
      fontWeight: 500,
      border: '1px solid #e4e4e4',
      borderRadius: '4px',
      textAlign: 'left',
      px: '0.5rem',
      minW: '10rem',
    },
    'appbar-menu': {
      h: '3rem',
      mx: '2px',
      fontSize: '1rem',
      fontWeight: '500',
      color: 'black',
      px: '1.25rem',
      _before: {
        content: '""',
        pos: 'absolute',
        w: '100%',
        h: '4px',
        bottom: 0,
        display: 'block',
        borderRadius: '2px',
        bgImage:
          'linear-gradient(92deg, #ef6829 5%, #f3a261 36%, #e8c46a 54%, #3699ae 83%)',
      },
    },
    toggle: {
      borderRadius: '6px',
      color: '#29879c',
      bg: 'rgba(54, 153, 174, 0.1)',
      _hover: {
        color: 'white',
        bg: 'c-orange.200',
      },
      _selected: {
        color: 'white',
        bg: 'c-orange.200',
      },
    },
  },
  sizes: {
    xs: {
      borderRadius: 'full',
      px: '0.875rem',
    },
    sm: {
      h: '1.875rem',
      borderRadius: '0.9375rem',
      px: '1rem',
      fontSize: '0.75rem',
    },
    md: {
      h: '2.25rem',
      borderRadius: '1.125rem',
      px: '1.25rem',
      fontSize: '1rem',
    },
    lg: {
      h: '2.5rem',
      borderRadius: '1.25rem',
      px: '1.75rem',
      fontSize: '1rem',
    },
    xl: {
      h: '3.125rem',
      borderRadius: '1.5625rem',
      px: '1.75rem',
      fontSize: '1.125rem',
    },
  },
};

export default Button;
