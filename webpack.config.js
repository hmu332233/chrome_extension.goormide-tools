module.exports = {
  mode: 'production',
  entry: {
    background: './src/background/index.js',
    contentScripts: './src/contentScripts/index.js',
    app: './src/app/index.js',
  },
  output: {
    path: `${ __dirname}/build`,
    filename: '[name].js',
    publicPath: './',
  },
  optimization: {
    minimize: true
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.jsx', '.js', '.scss']
  }
};
