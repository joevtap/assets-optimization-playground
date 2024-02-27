const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const path = require("path");

module.exports = {
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlBundlerPlugin({
      entry: {
        index: "src/index.html", // => dist/index.html
      },
      js: {
        filename: "js/[name].[contenthash:8].js",
      },
      css: {
        filename: "css/[name].[contenthash:8].css",
      },
      minify: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
      {
        test: /\.(ico|png|jp?g|webp|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "img/[name].[hash:8][ext][query]",
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle"],
              [
                "mozjpeg",
                {
                  quality: 40,
                },
              ],
              ["pngquant"],
              ["svgo"],
            ],
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
    minimize: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
