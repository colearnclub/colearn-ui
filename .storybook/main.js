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
  webpackFinal: (config) => {
    const r = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg'),
    );
    r.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: false,
            svgoConfig: {
              plugins: [{ removeViewBox: false }],
            },
            titleProp: true,
            ref: true,
          },
        },
      ],
    });

    return config;
  },
};
