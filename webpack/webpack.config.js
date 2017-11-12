const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Uglify = require("uglifyjs-webpack-plugin");
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
                    use : "css-loader"
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
    ],
    devServer:{
        contentBase: path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        port:'8081',
        compress:true
    }
};