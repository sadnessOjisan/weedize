const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV || "production",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./lib"),
    filename: "build.js",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, "src")],
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
};
