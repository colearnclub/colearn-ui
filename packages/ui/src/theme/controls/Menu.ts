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
  },
};

export default Menu;
