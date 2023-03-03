// 引入 path 模組，這是 Node.js 內建的模組，用來操作檔案路徑。
const path = require("path");
// 引入 HTMLWebpackPlugin，這是一個 Webpack 外掛，用來產生 HTML 檔案，並自動將 bundle.js 插入至 HTML 檔案中。
const HTMLWebpackPlugin = require("html-webpack-plugin");
// 引入 MiniCssExtractPlugin 外掛，這是一個 Webpack 外掛，用來將 CSS 檔案提取出來，並產生單獨的 CSS 檔案。
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 將設定檔案匯出，以讓 Webpack 能夠讀取設定。
module.exports = {
  // 設定 entry point 為 ./src/index.jsx。
  entry: "./src/index.jsx",
  // 設定 bundle 的輸出目錄和檔名。
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  // 設定 Webpack 外掛。
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html", // 設定 HTML 模板路徑。
    }),
    new MiniCssExtractPlugin({
      filename: "./index.css", // 使用 MiniCssExtractPlugin 外掛將 CSS 抽出成獨立的檔案。
    }),
  ],
  // 設定 Webpack 規則，用來轉換不同的檔案。
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/, // 設定要排除的檔案目錄。
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /.jsx$/, // 設定要轉換的檔案類型。
        exclude: /node_modules/, // 設定要排除的檔案目錄。
        use: [
          {
            loader: "babel-loader", // 設定要使用的 loader。
            options: {
              presets: [
                "@babel/preset-env", // 設定要使用的 Babel preset，用來將 ES6+ 轉換為 ES5。
                "@babel/preset-react", // 設定要使用的 Babel preset，用來將 JSX 轉換為 JavaScript。
              ],
            },
          },
        ],
      },
      {
        test: /\.(scss)$/,
        exclude: /node_modules/, // 設定要排除的檔案目錄。
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // 使用 MiniCssExtractPlugin 來提取 CSS。
          },
          {
            loader: "css-loader", // 設定要使用的 CSS loader。
            options: {
              modules: { localIdentName: "[name]__[local]___[hash:base64:5]" }, // 設定 CSS Modules，[hash:base64:5] 會被替換為一個 base64 編碼的 hash 值，用來保證本地類名的唯一性
            },
          },
          {
            loader: "sass-loader", // 設定要使用的 Sass loader。
          },
        ],
      },
    ],
  },
  // 設定 Webpack 可以處理的檔案類型。
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
