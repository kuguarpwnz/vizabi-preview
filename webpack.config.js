const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const customLoader = require('custom-loader');

const __PROD__ = process.env.NODE_ENV === 'production';
const sep = '\\' + path.sep;

const extractSCSS = new ExtractTextPlugin('assets/css/main.css');
customLoader.loaders = {
  ['tool-config-loader'](source) {
    this.cacheable && this.cacheable();

    this.value = [source];
    return `var VIZABI_MODEL = ${source};`;
  }
};

const preview = {
  devtool: 'source-map',

  entry: {
    preview: path.resolve('src', 'index'),
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    // path: '/',
    filename: '[name].js'
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
  },

  module: {
    loaders: [

      {
        test: /(d3|web|reader)\.js$/,
        include: [
          path.resolve(__dirname, 'node_modules'),
        ],
        loader: 'file-loader',
        query: {
          name: 'assets/vendor/js/[1]/[name].[ext]',
          regExp: new RegExp(`${sep}node_modules${sep}([^${sep}]+?)${sep}`),
        }
      },

      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src', 'assets', 'js'),
        ],
        loader: 'file-loader?name=assets/js/[name].[ext]',
      },

      {
        test: /\.pug$/,
        include: [
          path.resolve(__dirname, 'src', 'tools')
        ],
        loaders: [
          'file-loader?name=[name].html',
          'pug-html-loader?exports=false&pretty=true'
        ],
      },

      {
        test: /\.scss$/,
        // include: [
        //   path.resolve(__dirname, 'src', 'assets', 'css'),
        // ],
        loader: extractSCSS.extract([
          {
            loader: 'css-loader',
            // options: {
            //   minimize: __PROD__,
            //   // sourceMap: true,
            // },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            // options: {
            //   // TODO: check that it doesn't conflict with css source maps
            //   // sourceMap: true
            // },
          }
        ]),
      },

      {
        test: /\.(otf|eot|svg|ttf|woff2?)$/,
        include: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'file-loader',
        query: {
          name: 'assets/vendor/fonts/[name].[ext]'
        }
      },

      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'file-loader',
        query: {
          name: 'assets/vendor/css/[name].[ext]'
        }
      },

      {
        test: /\.json$/,
        include: [
          path.resolve(__dirname, 'node_modules'),
        ],
        loaders: [
          'file-loader?name=assets/js/toolconfigs/[name].js',
          'custom-loader?name=tool-config-loader',
        ],
      },

    ],
  },

  plugins: [
    extractSCSS,
    new CleanWebpackPlugin(['build']),
  ],

  devServer: {
    contentBase: [
      // TODO: remove this when issue below is fixed
      // https://github.com/webpack/webpack-dev-server/issues/641
      path.resolve(__dirname, '..'),
    ],
  },

};

const vizabi = require('vizabi/webpack.config');
const barRankChart = require('vizabi-barrankchart/webpack.config');

module.exports = __PROD__ ? preview : [
  preview,
  barRankChart,
  vizabi
];