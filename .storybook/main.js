module.exports = {
  stories: [
    '../packages/**/*.stories.mdx',
    '../packages/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-postcss',
    '@storybook/addon-essentials',
  ],
  staticDirs: ['../public'],
  framework: '@storybook/react',
};
