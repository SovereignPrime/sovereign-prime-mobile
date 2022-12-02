module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['.'],
        alias: {
          '@services': './src/services',
          '@hooks': './src/hooks',
          '@store': './src/store',
          '@navigation': './src/navigation',
          '@container': './src/containers',
          '@components': './src/components',
          '@screens': './src/screens',
          '@image': './src/assets/images',
          '@svg': './src/assets/svg',
          '@models': './src/models',
          '@styles': './src/styles',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
