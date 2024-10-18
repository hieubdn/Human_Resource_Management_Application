const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
devServer: {
  static: {
    directory: path.join(__dirname, 'dist'),
  },
  port: 3002,
},

output: {
  filename: "remoteEntry.js",
  publicPath: "http://localhost:3002/",
  path: path.resolve(__dirname, "dist"),
  clean: true,
},

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "employeeProfiles",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
      },
      shared: require("./package.json").dependencies,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
