import { Input } from './Input';

const Select = {
  sizes: {
    ...Input.sizes,
  },
  variants: {
    outline: {
      field: {
        bg: 'white',
        pl: '0.75rem',
        _focus: { boxShadow: 'none' },
      },
    },
  },
};

export default Select;
