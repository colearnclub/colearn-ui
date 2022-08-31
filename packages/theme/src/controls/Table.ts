const Table = {
  variants: {
    'report-table': {
      th: {
        borderTop: 'solid 1px #ddd',
        bg: '#f8f8f8',
        color: '#4d4d4d',
        textTransform: 'none',
        fontSize: '0.875rem',
        fontWeight: '800',
      },
      thead: {
        borderBottom: 'solid 1px #ddd',
      },
    },
    homeroom: {
      th: {
        py: '0.75rem',
        px: '1.5rem',
        color: '#000',
        fontSize: '0.875rem',
        fontWeight: '500',
        textTransform: 'none',
      },
      tr: {
        '&:nth-of-type(odd)': {
          td: {
            bg: 'rgba(233, 242, 244, 0.2)',
          },
        },
        _hover: {
          td: {
            bg: 'rgba(238, 104, 42, .05)',
          },
        },
      },
      td: {
        px: '1.5rem',
        py: '0.625rem',
        color: '#61767b',
        fontSize: '0.875rem',
        fontWeight: 'normal',
        borderTop: '1px solid  rgb(225, 228, 230)',
      },
    },
  },
};

export default Table;
