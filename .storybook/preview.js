import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { appTheme } from '../packages/theme/src';
import { ColorModeSwitch } from './ColorModeSwitch';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  chakra: {
    // theme: appTheme,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const theme = extendTheme(appTheme);

export const decorators = [
  (Story, context) => {
    return (
      <ChakraProvider theme={theme} resetCSS>
        <ColorModeSwitch />
        <Story {...context} />
      </ChakraProvider>
    );
  },
];
