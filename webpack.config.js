const path = require('path');

module.exports = {
  entry: {
    root: './lib/js/src/root/root.js',
  },
  output: {
    path: path.join(__dirname, "bundledOutputs"),
    filename: '[name].js',
  },
};
