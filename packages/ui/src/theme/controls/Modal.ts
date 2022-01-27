const Modal = {
  baseStyle: {
    dialog: {
      p: '0',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 16px 4px rgba(0, 0, 0, 0.15)',
    },
    closeButton: {
      top: '20px',
      opacity: 0.45,
      _focus: {
        boxShadow: 'none',
      },
      svg: {
        width: '1.125rem',
        height: '1.125rem',
      },
      _hover: {
        opacity: 0.8,
        bg: 'transparent',
      },
    },
    header: {
      flex: 'auto',
      display: 'flex',
      alignItems: 'center',
      h: '3.75rem',
      minH: '3.75rem',
      maxH: '3.75rem',
      color: '#313131',
      fontWeight: '700',
      fontSize: '1.125rem',
      px: '1.75rem',
      py: 0,
      borderBottom: 'solid 1px #e4e4e4',
    },
    body: {
      p: '1.75rem',
    },
    footer: {
      bg: 'bg.500',
      px: '1.7rem',
      borderTop: '1px solid #e4e4e4',
      borderBottomRadius: '0.5rem',
    },
  },
  defaultProps: {
    variant: 'gradient',
  },
};

export default Modal;
