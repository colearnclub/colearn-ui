import { ReactNode } from 'react';
import { Link as RNavLink, useMatch } from 'react-router-dom';
import { ChakraProps } from '@chakra-ui/react';

import {
  Box,
  BoxProps,
  chakra,
  StylesProvider,
  useMultiStyleConfig,
  useStyles,
} from '@chakra-ui/react';

export function NavLinks({
  variant,
  ...props
}: { variant: 'appbar' | 'sidebar' | 'inner' | 'inner-sidebar' } & BoxProps) {
  const styles = useMultiStyleConfig('NavLinks', { variant });
  return (
    <StylesProvider value={styles}>
      <Box __css={styles.container} {...props} />
    </StylesProvider>
  );
}

type Props = ChakraProps & {
  to: string;
  icon?: ReactNode;
  children?: ReactNode;
  end?: boolean;
  matchTo?: string;
};

const Container = chakra(RNavLink);

export function NavLink({
  children,
  icon,
  to,
  matchTo,
  end = true,
  ...rest
}: Props) {
  const styles = useStyles();
  const match = useMatch({ path: matchTo ?? to, end });
  return (
    <Container
      __css={styles.link}
      to={to}
      className={match ? 'active' : ''}
      {...rest}
    >
      {icon}
      {children}
    </Container>
  );
}
