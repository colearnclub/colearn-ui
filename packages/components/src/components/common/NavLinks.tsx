import { ForwardedRef, forwardRef, ReactNode } from 'react';
import { Link as RNavLink } from 'react-router-dom';

import {
  Box,
  BoxProps,
  StylesProvider,
  useMultiStyleConfig,
  useStyles,
} from '@chakra-ui/react';

import useMultipleMatch from '../hooks/useMultipleMatch';

export function NavLinks({
  variant,
  ...props
}: {
  variant:
    | 'appbar'
    | 'sidebar'
    | 'inner'
    | 'inner-sidebar'
    | 'inner-accent'
    | 'inner-accent2';
} & BoxProps) {
  const styles = useMultiStyleConfig('NavLinks', { variant });
  return (
    <StylesProvider value={styles}>
      <Box __css={styles.container} {...props} />
    </StylesProvider>
  );
}

export const NavLinkItem = forwardRef(
  (
    { children, isActive, ...rest }: { isActive?: boolean } & BoxProps,
    ref: ForwardedRef<HTMLDivElement | null>,
  ) => {
    const styles = useStyles();
    return (
      <Box
        ref={ref}
        as={rest.as ?? 'a'}
        className={isActive ? 'active' : ''}
        __css={styles.link}
        {...rest}
      >
        {children}
      </Box>
    );
  },
);

type NavLinkProps = BoxProps & {
  to: string;
  icon?: ReactNode;
  end?: boolean;
  matchTo?: string | string[];
};

export const NavLink = forwardRef(
  (
    { children, icon, to, matchTo, end = true, ...rest }: NavLinkProps,
    ref: ForwardedRef<HTMLDivElement | null>,
  ) => {
    const match = useMultipleMatch({ matchTo, path: to, end });
    return (
      <NavLinkItem
        ref={ref}
        as={RNavLink}
        isActive={!!match}
        {...{ to, ...rest }}
      >
        {icon}
        {children}
      </NavLinkItem>
    );
  },
);
