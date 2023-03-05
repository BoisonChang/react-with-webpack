react 和 react-dom：这两个模块是 React 库的核心，提供了构建用户界面的基本工具和功能，例如组件、虚拟 DOM、事件处理等。

@babel/core：这是 Babel 编译器的核心模块，用于将 ES6+ 代码转换成浏览器可以理解的 ES5 代码。

@babel/preset-env：这个 Babel 插件用于根据指定的目标浏览器和环境，自动确定需要转换的 JavaScript 语言特性，并使用相应的 polyfill 进行转换。

@babel/preset-react：这是一个 Babel 插件，用于将 JSX 语法转换为普通的 JavaScript 代码。

babel-loader：这个 Webpack loader 用于在打包过程中将 ES6+ 和 JSX 代码转换为 ES5 代码，以便在较老的浏览器中运行。

html-webpack-plugin：这是一个 Webpack 插件，用于在打包过程中自动生成 HTML 文件，并将打包后的 JavaScript 文件自动引入到 HTML 中。

webpack 和 webpack-cli：这两个模块是 Webpack 打包工具的核心，提供了代码分割、模块化、压缩、打包、热加载等一系列高级功能。

webpack-dev-server：这个模块是 Webpack 官方提供的开发服务器，用于在开发过程中自动编译代码并提供热加载、实时重载、代理等功能，以便于开发者调试和测试应用程序。

## React with Webpack

This is a starter project for building a React application with Webpack.

## Features

React 17
Webpack 5
Babel 7 with preset-env and preset-react
CSS and Sass support
Development server with hot module replacement
Production build with minification and chunk hashing
ESLint with Airbnb configuration
Jest and Enzyme for testing

## Getting Started

### Prerequisites

You need to have Node.js installed on your machine to use this starter project.

### Installing

Clone this repository to your local machine using git clone https://github.com/BoisonChang/react-with-webpack.git.
Change into the project directory using cd react-with-webpack.
Install the dependencies using npm install.

### Running

To start the development server, run npm start.
Open http://localhost:8080 in your web browser to view the app.
Start editing the files in the src directory. The development server will automatically reload the app when changes are made.

### Building

To create a production build of the app, run npm run build. The build files will be located in the dist directory.

### Testing

To run the tests, run npm test. This will run all the tests in the **tests** directory using Jest and Enzyme.

### License

This project is licensed under the MIT License - see the LICENSE file for details.

## React with Webpack

這是一個使用 Webpack 建置 React 應用程式的起始專案。

## 功能

React 17
Webpack 5
Babel 7，包含 preset-env 和 preset-react
支援 CSS 和 Sass
具備熱模組替換的開發伺服器
包含最小化和塊雜湊的產品生成
具備 Airbnb 配置的 ESLint
使用 Jest 和 Enzyme 進行測試

## 開始使用

先決條件
在使用此起始專案之前，您需要在電腦上安裝 Node.js。

### 安裝

使用 git clone https://github.com/BoisonChang/react-with-webpack.git 將此存放庫複製到您的本機端。
使用 cd react-with-webpack 命令切換到專案目錄。
使用 npm install 命令安裝所有必要的依賴項。

### 執行

若要啟動開發伺服器，請執行 npm start。
在瀏覽器中打開 http://localhost:8080，即可查看應用程式。
開始編輯 src 目錄中的檔案。開發伺服器會在進行更改時自動重新載入應用程式。

### 建置

若要建置應用程式的產品版本，請執行 npm run build 命令。產品版本的檔案會位於 dist 目錄中。

### 測試

若要執行測試，請執行 npm test 命令。這將使用 Jest 和 Enzyme 在 **tests** 目錄中運行所有測試。

### 授權

此專案採用 MIT 授權 - 請參閱 LICENSE 檔案以獲取詳細資訊。
