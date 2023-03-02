const WeekdayButton = {
  baseStyle: {
    boxSizing: 'border-box',
    bg: 'white',
    color: '#313131',
    fontWeight: 'bold',
    textAlign: 'center',
    _hover: {
      bg: 'c-orange.600',
      color: 'white',
    },
    _selected: {
      bg: 'c-orange.200',
      color: 'white',
    },
  },
  variants: {
    outline: {
      border: '1px solid #e4e4e4',
    },
    outline2: {
      _selected: {
        bg: 'white',
        color: 'c-orange.200',
        border: '1px solid #ee682a',
      },
    },
  },
  sizes: {
    md: {
      h: '2.5rem',
      w: '2.5rem',
      minH: '2.5rem',
      minW: '2.5rem',
      borderRadius: '2.5rem',
      lineHeight: '2.5rem',
      fontSize: '1rem',
    },
    lg: {
      h: '2.8125rem',
      w: '2.8125rem',
      minH: '2.8125rem',
      minW: '2.8125rem',
      borderRadius: '2.8125rem',
      lineHeight: '2.8125rem',
      fontSize: '1rem',
    },
  },
  defaultProps: {
    variant: 'default',
    size: 'md',
  },
};

export default WeekdayButton;
