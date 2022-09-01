import {
  Box,
  Link,
  BoxProps,
  FlexProps,
  ButtonProps,
  Tooltip,
  StylesProvider,
  useMultiStyleConfig,
  useStyles,
} from '@chakra-ui/react';
import IcontBtn from '../common/IcontBtn';

export function Container(props: BoxProps) {
  const styles = useMultiStyleConfig('Appbar');

  return (
    <StylesProvider value={styles}>
      <Box as="header" __css={styles.container} {...props} />
    </StylesProvider>
  );
}

export function Inner({ justifyContent, ...props }: FlexProps) {
  const styles = useStyles();
  return (
    <Box
      __css={styles.inner}
      justifyContent={justifyContent || 'space-between'}
      {...props}
    />
  );
}

export function ContainerFixed(props: BoxProps) {
  return (
    <Box
      as="header"
      pos="fixed"
      top="0"
      left="0"
      right="0"
      bg="white"
      height="4.5rem"
      borderBottom="1px"
      borderBottomColor="#ECEEEE"
      zIndex={15}
      {...props}
    />
  );
}

export function SignupLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      border="1px solid #3699AE"
      color="#354144"
      letterSpacing="0.2px"
      fontSize="xl"
      lineHeight="2.5rem"
      px="1rem"
      borderRadius="lg"
      _hover={{ textDecoration: 'none', opacity: 0.8 }}
    >
      Signup
    </Link>
  );
}

export function Badge(props: BoxProps) {
  return (
    <Box
      pos="absolute"
      top="-2px"
      px="4px"
      left="50%"
      bg="#d02020"
      color="white"
      h="15px"
      borderRadius="8px"
      fontSize="9px"
      fontWeight="600"
      lineHeight="15px"
      boxSizing="border-box"
      {...props}
    />
  );
}

export function IconButton({
  label,
  ...props
}: { label: string } & ButtonProps) {
  return (
    <Tooltip label={label} aria-label={label} hasArrow>
      <IcontBtn
        mr="1.5rem"
        pos="relative"
        {...props}
        sx={{
          svg: {
            fill: '#10525d',
            opacity: '0.45',
          },
        }}
      />
    </Tooltip>
  );
}

export function TitleContainer(props: BoxProps) {
  return (
    <Box
      display={{ base: 'none', md: 'flex' }}
      alignItems="flex-end"
      h="1.5rem"
      {...props}
    />
  );
}

export function Title(props: BoxProps) {
  return (
    <Box
      ml="0.5rem"
      color="#313131"
      fontSize="1.125rem"
      lineHeight="1"
      opacity="0.98"
      fontWeight="bold"
      {...props}
    />
  );
}

export function Subtitle(props: BoxProps) {
  return (
    <Box
      color="#61767b"
      fontSize="14px"
      lineHeight="1"
      fontWeight="500"
      ml="1rem"
      {...props}
    />
  );
}
