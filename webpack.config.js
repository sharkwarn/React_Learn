var webpack = require('webpack')
var path = require('path')

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development'),
  __DEV__: true
}

module.exports =  {
  //插件项
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  entry: [
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    publicPath: "/dist/js",
    path: `${__dirname}/dist/js`,
    filename: 'bundle.js'
  },
  module: {
    //加载器配置
    loaders: [
      {test: /\.js$/,exclude: /node_modules/,loader: "babel-loader",query:{presets:['react','es2015']}},
      {test: /\.css$/, loader: "style!css" }
    ]
  },
  devServer: {
    hot: true,
    inline: true
  },
  resolve:{
    extensions:["",".js",".jsx"]
  },
  watch: true
}
