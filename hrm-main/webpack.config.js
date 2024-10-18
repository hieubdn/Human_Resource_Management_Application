const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "hrm_main",
      remotes: {
        recruitment: "recruitment@http://localhost:3001/remoteEntry.js",
        employeeProfiles:
          "employeeProfiles@http://localhost:3002/remoteEntry.js",
      },
shared: {
  react: {
    import: 'react', // đường dẫn tới react
    singleton: true,
    strictVersion: false,
    requiredVersion: "18.2.0"
  },
  "react-dom": {
    import: 'react-dom',
    singleton: true,
    strictVersion: false,
    requiredVersion: "18.2.0"
  }
}


    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
    hot: false,
  },
};
