const Page = {
  parts: ['main', 'container', 'content'],
  baseStyle: {
    main: {
      boxSizing: 'border-box',
      paddingLeft: { base: 0, md: '5rem', '2xl': '10rem' },
      minH: '100vh',
      minW: '100vw',
    },
    container: {
      p: { base: 0, md: '2rem' },
    },
    content: {
      border: 'solid 1px #d3d3d3',
      borderRadius: '6px',
      bg: 'white',
      mx: 'auto',
      maxW: '110rem',
    },
  },
};

export default Page;
