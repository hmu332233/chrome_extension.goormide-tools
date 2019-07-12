const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'production',
  entry: {
    contentScripts: './src/contentScripts/index.js',
    app: './src/app/index.js',
  },
  output: {
    path: `${ __dirname}/build`,
    filename: '[name].js',
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  optimization: {
    minimize: true
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.jsx', '.js', '.scss']
  }
};
