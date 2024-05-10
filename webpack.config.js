const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "ServiceNowVoiceScreenpop.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "servicenowvoicescreenpop.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "ts-loader",
        options: {
          compilerOptions: {
            noEmit: false,
          },
        },
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader",
        options: { limit: 100000 },
      },
    ],
  },
};
