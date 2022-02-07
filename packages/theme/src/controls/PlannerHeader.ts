const PlannerHeader = {
  parts: ['container', 'item', 'title', 'subtitle'],
  baseStyle: {
    container: {
      display: 'flex',
      justifyConteint: 'space-between',
      pos: 'relative',
      h: '3.75rem',
      bg: 'white',
    },
    item: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: '700',
      lineHeight: '1',
    },
    title: {
      color: '#313131',
      fontSize: '0.875rem',
      _selected: {
        color: 'c-orange.500',
      },
    },
    subtitle: {
      color: '#3699ae',
      fontSize: '0.75rem',
      mt: '3px',
      _selected: {
        color: 'c-orange.500',
      },
    },
  },
};

export default PlannerHeader;
