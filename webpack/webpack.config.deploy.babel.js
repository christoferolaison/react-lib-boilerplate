import webpack from 'webpack'

import createConfig from './createConfig'

export default createConfig({

  output: {
    filename: '[chunkhash].bundle.js',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],

})
