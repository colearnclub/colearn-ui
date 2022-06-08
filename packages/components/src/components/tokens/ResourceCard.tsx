import { ForwardedRef, forwardRef } from 'react';
import {
  BoxProps,
  FlexProps,
  Box,
  useMultiStyleConfig,
  StylesProvider,
  useStyles,
  chakra,
} from '@chakra-ui/react';

import { Maybe } from '../types';

export const Container = forwardRef(
  (
    {
      variant = 'card',
      ...props
    }: { variant?: 'card' | 'card-tall' | 'modal' } & BoxProps,
    ref: ForwardedRef<HTMLDivElement | null>,
  ) => {
    const styles = useMultiStyleConfig('ResourceCard', { variant });
    return (
      <StylesProvider value={styles}>
        <Box ref={ref} __css={styles.container} {...props} />
      </StylesProvider>
    );
  },
);

export function Header(props: BoxProps) {
  const styles = useStyles();

  return <Box noOfLines={1} __css={styles.header} {...props} />;
}

export function Ages({
  min,
  max,
  ...rest
}: BoxProps & {
  min?: Maybe<string>;
  max?: Maybe<string>;
}) {
  const styles = useStyles();
  if (!min && !max) {
    return null;
  }
  return (
    <Box __css={styles.ages} {...rest}>
      Ages {min}-{max}
    </Box>
  );
}

export function Content(props: FlexProps) {
  const styles = useStyles();
  return <Box __css={styles.content} {...props} />;
}

export function Actions(props: FlexProps) {
  const styles = useStyles();
  return <Box __css={styles.actions} {...props} />;
}

export const Tags = chakra(Box, {
  baseStyle: {
    '> *': {
      mr: '0.5rem',
      mt: '0.5rem',
    },
  },
});
