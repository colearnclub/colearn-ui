const Radio = {
  baseStyle: {
    container: {
      cursor: 'pointer',
    },
    control: {
      _focus: {
        boxShadow: 'none',
      },
    },
  },
  sizes: {
    lg2: {
      control: { w: 5, h: 5 },
      label: { fontSize: '0.875rem' },
    },
  },
  defaultProps: {
    colorScheme: 'c-orange',
  },
};

export default Radio;
