// 引入 path 模組，這是 Node.js 內建的模組，用來操作檔案路徑。
const path = require('path')

// 引入 HTMLWebpackPlugin，這是一個 Webpack 外掛，用來產生 HTML 檔案，並自動將 bundle.js 插入至 HTML 檔案中。
const HTMLWebpackPlugin = require('html-webpack-plugin')

// 將設定檔案匯出，以讓 Webpack 能夠讀取設定。
module.exports = {
  // 設定 entry point 為 ./src/index.jsx。
  entry: './src/index.jsx',

  // 設定 bundle 的輸出目錄和檔名。
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  // 設定 Webpack 外掛。
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html' // 設定 HTML 模板路徑。
    })
  ],

  // 設定 Webpack 規則，用來轉換不同的檔案。
  module: {
    rules: [
      {
        test: /.jsx$/, // 設定要轉換的檔案類型。
        exclude: /node_modules/, // 設定要排除的檔案目錄。
        use: {
          loader: 'babel-loader', // 設定要使用的 loader。
          options: {
            presets: [
              '@babel/preset-env', // 設定要使用的 Babel preset。
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },

  // 設定 Webpack 可以處理的檔案類型。
  resolve: {
    extensions: ['.js', '.jsx']
  }
}