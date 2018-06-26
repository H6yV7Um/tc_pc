var path = require('path');
var webpack = require('webpack');
var Extract = require('extract-text-webpack-plugin');
// var IP = 'http://150.109.38.42'
var IP = 'http://119.28.134.82'
let ENV = process.env.NODE_ENV;
if (ENV == 'testdev') {
  IP = 'http://119.28.134.82';
}
module.exports = {
  entry: {
    build: ['./src/main.js'],
    vendor: ['iView', 'vue-swiper', 'vue-router', 'vuex', 'vue-resource', 'vue-awesome-swiper', 'vue', './src/js/const.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: "bundle-[id].js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
    }),
    new Extract("[name].css")
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: Extract.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader'
            }
          ]
        }),
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: Extract.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            }),
            less: Extract.extract({
              use: ['css-loader', 'less-loader'],
              fallback: 'vue-style-loader'
            }),
            stylus: Extract.extract({
              use: ['css-loader', 'stylus-loader'],
              fallback: 'vue-style-loader'
            })
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=1024'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      ...(true ? [{
        test: /\.(js)$/,
        loader: 'eslint-loader',
      }] : [])
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    proxy: {
      '/sso/*': {
        target: IP, // 119.28.89.111
        secure: false
      },
      '/config.js': {
        target: IP, // 119.28.89.111
        secure: false
      },
      '/yx/*': {
        target: IP,
        secure: false
      },
      '/vip/*': {
        target: IP,
        secure: false
      },
      '/py/*': {
        target: IP,
        secure: false
      },
      '/images/*': {
        target: IP,
        secure: false
      },
      '/js/*': {
        target: IP,
        secure: false
      },
      '/json/*': {
        target: IP,
        secure: false
      },
      '/css/*': {
        target: IP,
        secure: false
      },
      // '/dist/*': {
      //     target: IP,
      //     secure: false
      // },
      '/welcome/*': {
        target: IP,
        secure: false
      },
      '/assets/*': {
        target: IP,
        secure: false
      },
      // '/static/*': {
      //    target: IP,
      //    secure: false
      // },
      '/m/*': {
        target: IP,
        secure: false
      },
      '/plugins/*': {
        target: IP,
        secure: false
      },
      '/config.js': {
        target: IP,
        secure: false
      },
      '/welcome/*': {
        target: IP,
        secure: false
      },
      '/upload/*': {
        target: IP,
        secure: false
      },
      '/message/*': {
        target: IP,
        secure: false
      },
      '/socket.io/*': {
        target: IP,
        secure: false
      },
      // '/public/*': {
      //     target: IP,
      //     secure: false
      // },
      '/json/*': {
        target: IP,
        secure: false
      },
      '/gendan/*': {
        target: IP,
        secure: false
      },
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
