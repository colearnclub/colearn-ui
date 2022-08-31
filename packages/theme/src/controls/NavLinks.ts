const NavLinks = {
  parts: ['container', 'link'],
  baseStyle: {
    container: {},
    link: {
      pos: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  variants: {
    appbar: {
      container: {
        display: 'flex',
        h: '100%',
      },
      link: {
        h: '100%',
        mx: '2px',
        fontSize: '1rem',
        fontWeight: '500',
        color: '#999999',
        px: '1.25rem',
        '> *': {
          opacity: 0.4,
        },
        _before: {
          content: '""',
          pos: 'absolute',
          w: '100%',
          h: '4px',
          bottom: 0,
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
        '&.active': {
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
    sidebar: {
      link: {
        justifyContent: 'flex-start',
        pos: 'relative',
        pl: '1.5rem',
        h: '3.75rem',
        color: 'white',
        fontSize: '14px',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
        _before: {
          content: '""',
          pos: 'absolute',
          display: 'none',
          left: 0,
          borderTopRightRadius: '5px',
          borderBottomRightRadius: '5px',
          bgImage: 'linear-gradient(185deg, #f2dd7f, #ee682a)',
          h: '100%',
          w: '5px',
        },
        svg: {
          mr: '1rem',
        },
        '> *': {
          opacity: 0.55,
        },
        _hover: {
          bg: 'bg.900',
        },
        '&.active': {
          bg: 'bg.900',
          _before: {
            display: 'block',
          },
          '> *': {
            opacity: 1,
          },
        },
      },
    },

    inner: {
      container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRadius: '6px',
        p: '0.5rem',
      },
      link: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        color: '#c1c1c1',
        // fontSize: '0.875rem',
        lineHeight: '1.14',
        fontWeight: 'bold',
        minW: '12.5rem',
        h: '2.75rem',
        border: '1px solid transparent',
        borderRadius: '6px',
        mx: '2px',
        svg: {
          mr: '0.5rem',
        },
        _hover: {
          color: 'c-orange.200',
          'svg g': {
            stroke: 'c-orange.200',
          },
        },
        '&.active': {
          color: 'c-orange.200',
          bg: 'white',
          boxShadow: '2px 2px 2px 0 rgba(192, 192, 192, 0.25)',
          borderColor: '#dddddd',
          'svg g': {
            stroke: 'c-orange.200',
          },
        },
      },
    },
    'inner-sidebar': {
      container: {
        bg: '#f6f6f6',
      },
      link: {
        justifyContent: 'flex-start',
        pos: 'relative',
        pl: '1.35rem',
        h: '3.75rem',
        color: 'rgba(0,0,0, 0.25)',
        fontSize: '14px',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
        borderBottom: 'solid 1px #d3d3d3',
        svg: {
          mr: '0.5rem',
        },
        _hover: {
          color: 'c-orange.200',
          'svg g': {
            stroke: 'c-orange.200',
          },
        },
        '&.active': {
          color: 'c-orange.200',
          bg: 'white',
          'svg g': {
            stroke: 'c-orange.200',
          },
        },
      },
    },
    'inner-accent': {
      container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      link: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',

        color: '#61767b',
        fontSize: '1rem',
        lineHeight: '1',
        fontWeight: 'normal',

        minW: '10rem',
        h: '3rem',
        border: '2px solid #ccd5d7',
        marginRight: '-2px',
        svg: {
          mr: '0.5rem',
        },
        _first: {
          borderLeftRadius: '6px',
        },
        _last: {
          borderRightRadius: '6px',
        },
        _hover: {
          color: 'c-orange.200',
          bg: 'white',
          'svg g': {
            stroke: 'c-orange.200',
          },
        },
        '&.active': {
          position: 'relative',
          zIndex: '1',
          fontWeight: '500',
          color: 'c-orange.200',
          borderColor: 'c-orange.200',
          bg: 'white',
          'svg g': {
            stroke: 'c-orange.200',
          },
        },
      },
    },
    'inner-accent2': {
      container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      link: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',

        color: '#61767b',
        fontSize: '0.875rem',
        lineHeight: '1',
        fontWeight: 'normal',

        h: '2rem',
        px: '1.5rem',
        border: '1px solid #ccd5d7',
        marginRight: '-1px',
        _first: {
          borderLeftRadius: '1rem',
        },
        _last: {
          borderRightRadius: '1rem',
        },
        _hover: {
          color: 'c-orange.200',
        },
        '&.active': {
          position: 'relative',
          zIndex: '1',
          color: 'c-orange.200',
          borderColor: 'c-orange.200',
        },
      },
    },
  },
};

export default NavLinks;
