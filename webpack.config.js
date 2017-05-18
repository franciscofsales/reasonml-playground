const join = require('path').join
const HtmlPlugin = require('webpack-html-plugin')

const stats = {
  chunks: false,
  modules: false,
}

module.exports = [
  {
    entry: './lib/js/src/index.js',
    output: {
      filename: 'bundle.js',
      path: join(__dirname, 'dist'),
      publicPath: '/',
    },
    plugins: [
      new HtmlPlugin({
        template: './src/index.html',
      }),
    ],
    stats,
    devServer: {
      stats,
    },
  },
]
