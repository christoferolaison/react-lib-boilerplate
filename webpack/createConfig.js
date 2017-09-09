import StaticSiteGeneratorWebpackPlugin from 'static-site-generator-webpack-plugin'
import path from 'path'

export default options => ({

  entry: './example/entry.js',

  output: {
    filename: options.output.filename,
    path: path.resolve('build'),
    libraryTarget: 'umd',
  },

  module: {
    rules: [{
      test: /.js$/,
      use: 'babel-loader',
    }],
  },

  plugins: [
    new StaticSiteGeneratorWebpackPlugin('main', [ '/' ]),
    ...options.plugins,
  ],

})
