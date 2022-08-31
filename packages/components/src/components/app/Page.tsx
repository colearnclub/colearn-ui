import {
  Box,
  BoxProps,
  StylesProvider,
  useMultiStyleConfig,
  useStyles,
} from '@chakra-ui/react';
import useDocumentTitle from '../hooks/useDocumentTitle';

type Props = BoxProps & {
  title: string;
};

export function Main(props: BoxProps) {
  const styles = useMultiStyleConfig('Page');

  return (
    <StylesProvider value={styles}>
      <Box
        as="main"
        sx={{
          '@media print': {
            display: 'none',
          },
        }}
        __css={styles.main}
        {...props}
      />
    </StylesProvider>
  );
}

export function Container({ title, ...rest }: Props) {
  const styles = useStyles();
  useDocumentTitle(title);
  return <Box __css={styles.container} {...rest} />;
}

export function Content(props: BoxProps) {
  const styles = useStyles();
  return <Box __css={styles.content} {...props} />;
}

export function Title(props: BoxProps) {
  return (
    <Box fontSize="1.125rem" color="#313131" fontWeight="bold" {...props} />
  );
}
