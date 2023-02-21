const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //清理/dist文件夹
const TerserJSPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        index: path.resolve(__dirname, "./src/web/index.js"), //'./src/index.js'
        app: path.resolve(__dirname, "./src/app/index.js"),
    },
    optimization: {
        minimizer: [new TerserJSPlugin({})],
    },
    plugins: [new CleanWebpackPlugin()],
    output: {
        filename: "[name].js",
        library: {
            type: "umd",
            name: "wzLocale",
        },
        path: path.resolve(__dirname, "lib"),
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
};
