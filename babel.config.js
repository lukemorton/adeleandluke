module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '~capabilities': './src/capabilities',
          '~interfaces': './src/interfaces',
          '~pages': './pages',
        },
      },
    ],
  ],
}
