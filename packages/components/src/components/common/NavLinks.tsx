import { ForwardedRef, forwardRef, ReactNode } from 'react';
import { Link as RNavLink } from 'react-router-dom';

import {
  ChakraProps,
  Box,
  BoxProps,
  chakra,
  StylesProvider,
  useMultiStyleConfig,
  useStyles,
} from '@chakra-ui/react';

import useMultipleMatch from '../hooks/useMultipleMatch';

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
  matchTo?: string | string[];
};

const NavLinkContainer = chakra(RNavLink);

export const NavLink = forwardRef(
  (
    { children, icon, to, matchTo, end = true, ...rest }: Props,
    ref: ForwardedRef<HTMLAnchorElement | null>,
  ) => {
    const styles = useStyles();
    const match = useMultipleMatch({ matchTo, path: to, end });
    return (
      <NavLinkContainer
        ref={ref}
        __css={styles.link}
        to={to}
        className={match ? 'active' : ''}
        {...rest}
      >
        {icon}
        {children}
      </NavLinkContainer>
    );
  },
);
