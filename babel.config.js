module.exports = {
  presets: [
    [
      `@babel/preset-env`,
      {
        loose: true,
        modules: false,
      },
    ],
  ],
  plugins: [
    [`babel-plugin-htm`, {
      import: `preact`,
    }],
  ],
};
