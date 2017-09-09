import BrowserSyncPlugin from 'browser-sync-webpack-plugin'
import createConfig from './createConfig'

export default createConfig({

  output: {
    filename: 'bundle.js',
  },

  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: [ 'build' ] },
    }),
  ],

})
