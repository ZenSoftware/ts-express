const path = require("path");
const { NODE_ENV = "production" } = process.env;

module.exports = {
  entry: "./src/main.ts",
  mode: NODE_ENV,
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader']
      }
    ]
  },
  stats: {
    warningsFilter: warning => {
      // Critical dependency
      return RegExp("node_modules/express/lib/view.js").test(warning);
    }
  }
};
