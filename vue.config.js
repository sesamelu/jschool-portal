const path = require('path');//引入path模块
const configJs = require('./config.json')
const webpack = require('webpack')
let GenerateAssetPlugin = require('generate-asset-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let createServerConfig = function (compilation) {//声明转换函数，将对象转为json字符串
    return JSON.stringify(configJs)

}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/jschool-portal/' : '/',
    outputDir: 'jschool-portal',
    //   indexPath: 'index.html',
    assetsDir:'static',
    pages: {
        "jschool-portal/index": {
          entry: './src/components/entry/index.js',
          template: 'public/index.html',  
          filename: 'index.html',
          title: '齐舜学校·界首',
        }
    },
    lintOnSave: false,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@assets', path.join(__dirname, './src/assets'));
        config.resolve.alias
            .set('@components', path.join(__dirname, './src/components'));
            config.resolve.alias
            .set('@pages', path.join(__dirname, './src/components/pages'));
        config.resolve.alias
            .set('@http', path.join(__dirname, './src/http'));
        config.resolve.alias
            .set('@utils', path.join(__dirname, './src/components/utils'));
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.compilerOptions.whitespace = true
                return options
            })
    },
    configureWebpack: {
        plugins: [
            new GenerateAssetPlugin({
                filename: 'config.json',
                fn: (compilation, cb) => {
                    cb(null, createServerConfig(compilation))
                }
            }),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            })
        ],
        optimization:{
            minimizer:[
                new UglifyJsPlugin({
                uglifyOptions:{
                //删除注释
                output:{
                  comments:false
                },
                //删除console 和 debugger  删除警告
                compress:{
                //  warnings:false,
                  drop_debugger:true,
                //   drop_console:true
                }
                }
              })
            ]
        }
    },
    devServer: {
        proxy: { //解决跨域
            '/api': {
                'target': configJs.SERVER_URL,
                'secure': false, // false为http访问，true为https访问
                'changeOrigin': true, // 跨域访问设置，true代表跨域
                'pathRewrite': { // 路径改写规则
                    '^/api': '' // 以/api/为开头的改写为''
                }
            }
        }
    }
}