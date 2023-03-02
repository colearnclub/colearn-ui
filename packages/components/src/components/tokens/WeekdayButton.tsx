import { BoxProps, Box, useStyleConfig, ThemingProps } from '@chakra-ui/react';

type Props = BoxProps & {
  size?: 'md' | 'lg';
  variant?: 'default' | 'outline' | 'outline2';
  value?: string;
};

export default function WeekdayButton({
  size = 'md',
  variant = 'default',
  ...props
}: Props) {
  const styles = useStyleConfig('WeekdayButton', {
    size: size as string | undefined,
    variant: variant as string | undefined,
  } as ThemingProps);

  return <Box as="button" __css={styles} {...props} />;
}
