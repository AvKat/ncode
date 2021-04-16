const path = require("path");
const ShebangPlugin = require("webpack-shebang-plugin");

module.exports = {
    context: __dirname,
    entry: "./src/index.ts",
    target: "node",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js",
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(t|j)s$/,
                exclude: /node_modules/,
                use: [{loader: require.resolve("ts-loader")}],
            },
        ],
    },
    plugins: [new ShebangPlugin()],
};
