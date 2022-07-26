/**
 * Module dependencies
 */
const {
  createConfig,
  entryPoint,
  customConfig } = require('nordic-dev/building_blocks');
const classicPreset = require('nordic-dev/building_blocks/presets/classic');
const { name } = require('./package.json');

const { APPLICATION } = process.env;
const path = require('path');

/**
 * Create webpack config
 */

const entrypoints = {
  demo: './app/client/demo.js',
};

const generateLegacyBundles = entryPoints => Object.keys(entryPoints).reduce((accumulator, entrypointName) => {
  const filePath = entryPoints[entrypointName];

  const fileExtension = path.extname(filePath);

  if (fileExtension === '.js') {
    // Create `legacy` entrypoints which will have polyfills for old browsers
    accumulator.polyfilled[`${entrypointName}.legacy`] = ['./app/client/polyfills', filePath];

    // Create entrypoints without polyfills for modern browsers
    accumulator.nonPolyfilled[entrypointName] = [filePath];
  } else {
    accumulator.nonJsAssets[entrypointName] = [filePath];
  }
  return accumulator;
}, { polyfilled: {}, nonPolyfilled: {}, nonJsAssets: {} });


const entryPointsFamilies = generateLegacyBundles(entrypoints);
const entryPointsCount = Object.keys(entryPointsFamilies.nonPolyfilled).length;
const legacyEntryPointsCount = Object.keys(entryPointsFamilies.polyfilled).length;

const config = createConfig([
  entryPoint({
    ...entryPointsFamilies.polyfilled,
    ...entryPointsFamilies.nonPolyfilled,
    ...entryPointsFamilies.nonJsAssets
  }),
  customConfig({
    optimization: {
      moduleIds: 'named',
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          default: false,
          defaultVendors: false,
          vendor: {
            name: 'vendor',
            chunks: chunk => !!entryPointsFamilies.nonPolyfilled[chunk.name],
            /**
             * The following line moves modules to the vendor when they´re repeated in 80%
             * of your entrypoints. Feel free to modify this heuristic to your needs.
             */
            minChunks: Math.max(1, entryPointsCount * 0.8),
            reuseExistingChunk: true,
          },
          vendorLegacy: {
            name: 'vendor.legacy',
            chunks: chunk => !!entryPointsFamilies.polyfilled[chunk.name],
            /**
             * The following line moves modules to the vendor.legacy when they´re repeated in 80%
             * of your entrypoints. Feel free to modify this heuristic to your needs
             */
            minChunks: Math.max(1, legacyEntryPointsCount * 0.8),
            reuseExistingChunk: true,
          },
        },
      },
    },
  }),
  classicPreset({
    buildPath: 'build',
    publicPath: `https://http2.mlstatic.com/frontend-assets/${APPLICATION || name}/`,
    imagesPath: './app/assets/images',
  }),
]);

/**
 * Expose config
 */
module.exports = config;
