const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Uglify = require("uglifyjs-webpack-plugin");
const glob = require("glob");
const purifycssWebpack = require('purifycss-webpack');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        entry:"./src/index.js"
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename :'[name].js'
    },
    module:{
        rules : [
            {
                test : /\.css$/,
                // use  :['style-loader','css-loader']
                use : ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    // use : "css-loader"
                    use: [{
                        loader:"css-loader",
                        options:{importLoaders:1}
                    },"postcss-loader"]
                    // exclude:/node_modules/
                })
            },
            {
                test : /\.(png|jpg|gif)$/,
                use : [{
                    loader : 'url-loader',
                    options : {
                        limit:50000000000,
                        outputPath : 'img/'
                    }
                }]
            },
            {
                test:/\.scss$/,
                // use:['style-loader','css-loader','sass-loader']
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","sass-loader"]

                })
            },

            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015","react"]
                    }
                }],
                exclude: /node_modules/

            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template: "./src/index.html"
        }),
        new ExtractTextPlugin("css/index.css"),
        // new Uglify()

        new purifycssWebpack({
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        }),

        new webpack.BannerPlugin("成哥所有"),
    ],
    devServer:{
        contentBase: path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        port:'8081',
        compress:true
    }
};