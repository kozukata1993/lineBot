const path = require("path");
const GasPlugin = require("gas-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "none",
  entry: {
    app: "./src/index.ts"
  },
  output: {
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ["ts-loader"]
      }
    ]
  },
  plugins: [new GasPlugin()],
  resolve: {
    extensions: [".ts"]
  }
};
