const path = require("path");

module.exports = {
  entry: {
    app: ["babel-polyfill", "./src/scripts/app.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,

        rules: [
          { test: /\.js?$/, use: "babel-loader" },
          {
            test: /particles\.js/,
            use:
              "exports-loader?particlesJS=window.particlesJS,pJSDom=window.pJSDom"
          },
          {
            test: /particle\.json/,
            type: "javascript/auto",
            use: [require.resolve("json-loader")]
          }
        ]
      }
    ]
  }
};
