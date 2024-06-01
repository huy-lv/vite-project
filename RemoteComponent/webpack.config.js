const { join } = require("path");
const remoteComponentConfig = require("./remote-component.config").resolve;

const externals = Object.keys(remoteComponentConfig).reduce(
  (obj, key) => ({ ...obj, [key]: key }),
  {}
);

const cfg = {
  optimization: {
    minimize: true // Disable code minimization for readable output
  },
  entry: {
    main: join(__dirname, "index.jsx")
  },
  output: {
    libraryTarget: "commonjs",
  },
  externals: {
    ...externals,
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
};

module.exports = cfg;
