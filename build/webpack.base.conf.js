'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const vuxLoader = require('vux-loader')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}


const webpackConfig = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}

module.exports = vuxLoader.merge(webpackConfig, {
  plugins: [
    {
      name: 'vux-ui',
    },
    {
  name: 'i18n',
  vuxStaticReplace: false,
  staticReplace: false,
  extractToFiles: 'src/locales/components.yml',
  localeList: ['en', 'zh-CN']
},
{
 name: 'script-parser',
 fn: function (source) { 
const s=source.replace('VARIABLE', 'v2')
   return s
 }
},
{
 name: 'style-parser',
 fn: function (source) {
   const s=source.replace('black', 'white')
   return  s
 }
},{
 name: "template-parser",
  replaceList: [{
    test: /DeathToPM/g,
    replaceString: '微博-随时随地发现新鲜事'
  }, {
    test: /呵呵我们压根没有底线/g,
    replaceString: '我是有底线的'
  }],
  fn: function (templateSource) {
   const s=templateSource.replace('智障', '机智')
   return s
  }},
  {
 name: 'js-parser',
 fn: function (source) {
     const s=source.replace('black', 'white')
   return s
 }
},
{
  name: 'template-feature-switch',
  features: {
    feature1: false,
    feature2: false
  }
},
{
  name: 'html-build-callback',
  events: {
   'after-html-processing': function (data, cb) {
    // console.log('ddata',data)
      data.html += 'magic footer'
      // console.log('dafter',data)
      cb(null, data)
   }
  }
},
{
 name: 'build-done-callback',
 fn: function () {
   console.log('done!donedonedonedonedone')
 }
},
/*{
  name: 'duplicate-style',
  options: {
    cssProcessorOptions : {
      safe: true,
      zindex: false,
      autoprefixer: {
        add: true,
        "browsers": [
          "iOS >= 7",
          "Android >= 4.1"
        ]
      }
    }
  }
}*/
  ],
})