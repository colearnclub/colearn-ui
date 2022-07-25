import { useContext, createContext, CSSProperties } from 'react';
import {
  Tooltip,
  StylesProvider,
  useMultiStyleConfig,
  useStyles,
  Box,
  BoxProps,
} from '@chakra-ui/react';

const MultiProgressContext = createContext<{ color: string; max: number }>({
  color: '',
  max: 100,
});

type MultiProgressProps = BoxProps & {
  color?: string;
  size?: 'md' | 'sm' | 'lg';
  max?: number;
};

export function Container({
  children,
  color = '#00b99b',
  size = 'md',
  max = 100,
  ...rest
}: MultiProgressProps) {
  const styles = useMultiStyleConfig('MultiProgressBar', { size });
  return (
    <Box __css={styles.container} {...rest}>
      <MultiProgressContext.Provider value={{ color, max }}>
        <StylesProvider value={styles}>{children}</StylesProvider>
      </MultiProgressContext.Provider>
    </Box>
  );
}

type MultiProgressBarProps = BoxProps & {
  type?: 'primary' | 'secondary' | 'blank';
  value?: number;
  label?: string;
  style?: CSSProperties;
};

export function Bar({
  value,
  label,
  bg,
  children,
  type = 'primary',
  style = {},
  ...rest
}: MultiProgressBarProps) {
  const styles = useStyles();
  const { color, max } = useContext(MultiProgressContext);

  const width = ((value ?? 0) / max) * 100;
  return (
    <Tooltip label={label} placement="bottom-end" hasArrow>
      <Box
        __css={styles.progress}
        opacity={type === 'secondary' ? '0.2' : undefined}
        // textAlign={type === 'primary' ? 'left' : undefined}
        style={{
          width: `${width}%`,
          backgroundColor: (bg as string | undefined) ?? color,
          ...style,
        }}
        {...rest}
      >
        {children}
      </Box>
    </Tooltip>
  );
}

type MultiProgressBarBonusProps = BoxProps & {
  value?: number;
  label?: string;
  style?: CSSProperties;
};

export function Bonus({
  value,
  children,
  style = {},
  label,
  ...rest
}: MultiProgressBarBonusProps) {
  const styles = useStyles();
  const { max } = useContext(MultiProgressContext);

  const width = ((value ?? 0) / max) * 100;
  return (
    <Tooltip label={label} placement="bottom-end" hasArrow>
      <Box
        __css={styles.bonus}
        style={{
          width: `${width}%`,
          ...style,
        }}
        {...rest}
      >
        {children}
      </Box>
    </Tooltip>
  );
}
