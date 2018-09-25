const path = require("path");
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
// const extractPlugin = new ExtractTextPlugin({
//   filename: "main.css"
// });

module.exports = {
  entry: { main: "./src/scripts/app.js" },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "build.app.js"
  },
  module: {
    rules: [
      { test: /\.js?$/, exclude: /node_modules/, use: "babel-loader" },
      {
        test: /\.s[c|a]ss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /particles\.js/,
        use:
          "exports-loader?particlesJS=window.particlesJS,pJSDom=window.pJSDom"
      },
      {
        test: /\.html?$/,
        use: ["html-loader"]
      },
      {
        test: /\.(gif|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true
            }
          }
        ]
      },
      {
        test: /particle\.json/,
        type: "javascript/auto",
        use: [require.resolve("json-loader")]
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "build.app.css"
    }),
    new HtmlWebpackPlugin({
      template: "src/html/index.html",
      filename: "index.html",
      favicon: 'src/assets/img/favicon.png',
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "src/html/about.html",
      favicon: 'src/assets/img/favicon.png',
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "src/html/contact.html",
      favicon: 'src/assets/img/favicon.png',
    }),
    new HtmlWebpackPlugin({
      filename: "skill.html",
      template: "src/html/skill.html",
      favicon: 'src/assets/img/favicon.png',
    }),
    new CleanWebpackPlugin(["build"]),
    new WebpackMd5Hash()
  ]
};
