const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js", // 指定入口文件
  output: {
    filename: "index.js", // 指定输出文件
    path: path.resolve(__dirname, "dist"), // 指定输出目录
    library: {
      name:"ocr",
      type: 'umd'
    },
    // libraryTarget: "var",
  },
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
      buffer: require.resolve("buffer/"),
      stream: require.resolve("stream-browserify"),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, "./build/plugins/fix-opencv-module-loader.js"),
          },
        ],
      },
    ],
  },
  devtool: "source-map",
};
