const Input = {
  baseStyle: {},
  sizes: {
    lg: {
      field: {
        borderRadius: '0.25rem',
      },
    },
    md: {
      field: {
        borderRadius: '0.25rem',
      },
    },
  },
  variants: {
    outline: {
      field: {
        bg: 'white',
        _focus: { boxShadow: 'none' },
      },
    },
  },
};

const Textarea = {
  baseStyle: {},
  sizes: {
    lg: {
      borderRadius: '0.25rem',
    },
    md: {
      borderRadius: '0.25rem',
    },
  },
  variants: {
    outline: {
      bg: 'white',
      _focus: { boxShadow: 'none' },
    },
  },
};

export { Input, Textarea };
