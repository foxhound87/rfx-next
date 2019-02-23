/* eslint import/no-extraneous-dependencies: 0 */
/* eslint global-require: 0 */
module.exports = {
  plugins: [
    require('postcss-modules')({
      generateScopedName: '[local]-[hash:base64:5]',
    }),
    require('postcss-import')({
      addModulesDirectories: ['node_modules'],
    }),
    require('postcss-extend')(),
    require('postcss-focus')(),
    require('autoprefixer')(),
    require('precss')(),
    require('cssnano')({
      discardComments: {
        removeAll: true,
      },
    }),
  ],
};
