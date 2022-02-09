import { chakra } from '@chakra-ui/react';

const IcontBtn = chakra('button', {
  baseStyle: {
    background: 'transparent',
    cursor: 'pointer',
    padding: 0,
    outline: 0,
    '&:hover': {
      opacity: 0.7,
    },
  },
});

export default IcontBtn;
