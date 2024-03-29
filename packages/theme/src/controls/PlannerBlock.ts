const PlannerBlock = {
  parts: ['container', 'title', 'subject', 'progress', 'strip', 'statusBadge'],
  baseStyle: {
    container: {
      position: 'relative',
      boxSizing: 'border-box',
      borderRadius: '3px',
      h: '4.5rem',
      w: '100%',
      bg: 'white',
      transform: 'translate(0, 0)',
      cursor: 'pointer',
      border: 'solid 1px #dddddd',
      boxShadow: '2px 2px 2px 0 rgba(192, 192, 192, 0.25)',
      _hover: {
        '.pl-block-statusbridge': {
          opacity: 0,
        },
        '.pl-actions': {
          opacity: 1,
        },
      },
    },
    placeholder: {
      boxSizing: 'border-box',
      borderRadius: '3px',
      h: '4.5rem',
    },
    inner: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      h: '100%',
      pl: '0.75rem',
      py: '0.5rem',
      pr: '0.5rem',
    },
    statusBadge: {
      pos: 'absolute',
      top: '-9px',
      right: '0',
      opacity: 1,
      h: '18px',
      px: '10px',
      fontSize: '9px',
      lineHeight: '18px',
      bg: '#48adf3',
      color: 'white',
      borderRadius: '9px',
      textTransform: 'uppercase',
      transition: 'opacity 0.15s ease-out',
    },
    strip: {
      pos: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      w: '6px',
      borderRadius: '3px',
      my: '-1px',
      ml: '-1px',
      borderLeftRadius: '3px',
      borderRightRadius: 0,
    },
    title: {
      fontSize: '0.75rem',
      fontWeight: '500',
      lineHeight: 1.33,
      color: '#313131',
    },
    subject: {
      fontSize: '0.875rem',
      fontWeight: '800',
      mr: '0.5rem',
      lineHeight: 'inherit',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      w: 'calc(100% - 3.2rem)',
    },
    progress: {
      w: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    actions: {
      position: 'absolute',
      left: '-1px',
      right: '-1px',
      top: '-1px',
      bottom: '-1px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '3px',
      px: '1.25rem',
      bg: 'rgba(250, 100, 0, 0.95)',
      transition: 'opacity 0.15s ease-out',
      opacity: 0,
    },
    actionsInner: {
      display: 'flex',
      alignItems: 'center',
    },
    delete: {
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      outline: 0,
      path: {
        stroke: 'white',
      },
    },
    duplicate: {
      ml: '1.25rem',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      outline: 0,
    },
    review: {
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      outline: 0,
    },
    moveIcon: {
      path: {
        stroke: 'white',
      },
    },
    duration: {
      display: 'flex',
      alignItems: 'center',
      junstifyContent: 'center',
      flexDirection: 'row',
      color: '#61767B',
      fontSize: '0.75rem',
      flexGrow: 1,
      svg: {
        marginRight: '2px',
      },
    },
  },
};

export default PlannerBlock;
