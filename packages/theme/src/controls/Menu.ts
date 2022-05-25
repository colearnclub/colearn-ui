const Menu = {
  baseStyle: {
    list: {
      boxShadow: 'md',
      border: 'none',
      borderRadius: '0.5rem',
    },
  },
  variants: {
    'subject-addon': {
      button: {
        pos: 'absolute',
        right: '1px',
        top: '0',
        bottom: '0',
        w: '5.25rem',
        bg: '#fafafa',
        color: '#c1c1c1',
        borderLeft: 'solid 1px #e4e4e4',
        borderRightRadius: '0.25rem',
        _hover: { opacity: 0.7 },
      },
    },
    appbar: {
      item: {
        pl: '0.7rem',
      },
      button: {
        h: '100%',
        mx: '2px',
        fontSize: '1rem',
        fontWeight: '500',
        color: '#999999',
        px: '1.25rem',
        position: 'relative',
        span: {
          display: 'flex',
          alignItems: 'center',
        },
        '> *': {
          opacity: 0.4,
        },
        _before: {
          content: '""',
          pos: 'absolute',
          w: '100%',
          h: '4px',
          bottom: 0,
          left: 0,
          display: 'none',
          borderRadius: '2px',
          bgImage:
            'linear-gradient(92deg, #ef6829 5%, #f3a261 36%, #e8c46a 54%, #3699ae 83%)',
        },
        _hover: {
          color: 'black',
          '> *': {
            opacity: 1,
          },
        },
        '.disclose': {
          ml: '1rem',
        },
        _selected: {
          color: 'black',
          _before: {
            display: 'block',
          },
          '> *': {
            opacity: 1,
          },
        },
      },
    },
  },
};

export default Menu;
