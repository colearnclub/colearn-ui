import {
  Box,
  Flex,
  Link,
  BoxProps,
  FlexProps,
  ButtonProps,
  Tooltip,
} from '@chakra-ui/react';
import IcontBtn from '../common/IcontBtn';

export function Container(props: BoxProps) {
  return (
    <Box
      as="header"
      bg="white"
      height="3.125rem"
      borderBottom="1px"
      borderBottomColor="rgba(92, 164, 175, 0.15)"
      zIndex={15}
      {...props}
    />
  );
}

export function Inner({ justifyContent, ...props }: FlexProps) {
  return (
    <Flex
      boxSizing="border-box"
      pl="1.25rem"
      pr="1.25rem"
      align="center"
      h="100%"
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
      right="-4px"
      bg="#d02020"
      color="white"
      w="15px"
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
  return <Box display="flex" alignItems="flex-end" h="1.5rem" {...props} />;
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
