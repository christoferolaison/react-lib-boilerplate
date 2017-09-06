import StaticSiteGeneratorWebpackPlugin from 'static-site-generator-webpack-plugin'
import BrowserSyncPlugin from 'browser-sync-webpack-plugin'
import webpack from 'webpack'
import path from 'path'

const isDevEnv = process.env.NODE_ENV !== 'production'

let plugins = [ new StaticSiteGeneratorWebpackPlugin('main', [ '/' ]) ]
if (isDevEnv) {
  plugins = [
    ...plugins,
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: [ 'build' ] },
    }),
  ]
} else {
  plugins = [
    ...plugins,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ]
}

const webpackConfig = {

  entry: './example/entry.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve('build'),
    libraryTarget: 'umd',
  },

  module: {
    rules: [{
      test: /.js$/,
      include: /example/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [ 'babel-preset-react', 'babel-preset-env', 'babel-preset-stage-2' ],
        },
      }],
    }],
  },

  plugins,

}

export default webpackConfig
