const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'production',
    entry: {
        main : path.resolve(__dirname,'src/app.js')
    },   
    output: {
        path : path.resolve(__dirname,'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename:'assets/[name][ext]',
        clean:true,
    },
    // used for debugging purpose , bcuz if we have an error in any line it will show the line number in bundled file ,
    // but we want to see in the source code we wrote. that's why we using this.
    devtool:'source-map', 
    devServer:{
        static:{
            directory: path.resolve(__dirname,'dist'),
        },
        port:4000,
        open:true,
        hot:true,
        compress:true,
        historyApiFallback:true,
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset/resource',
            },
            //FIXME: ReferenceError: regeneratorRuntime is not defined
            // {
            //     // babel used for backward compatibility , that our app also runs in older browsers also.
            //     test:/\.js$/,
            //     exclude:/node_modules/,
            //     use:{
            //         loader:'babel-loader',
            //         options:{
            //             presets:['@babel/preset-env'],
            //         }
            //     }
            // }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            title: 'TODO SPA',
            filename: 'index.html',
            template: path.resolve(__dirname,'src/index.html')
        }),
        new htmlWebpackPlugin({
            filename:'components/tasks.html',
            template: path.resolve(__dirname,'src/components/tasks.html'),
            inject:false,
        }),
        new htmlWebpackPlugin({
            filename:'components/home.html',
            template: path.resolve(__dirname,'src/components/home.html'),
            inject:false,
        }),
        new htmlWebpackPlugin({
            filename:'components/add.html',
            template: path.resolve(__dirname,'src/components/add.html'),
            inject:false,
        }),
        new htmlWebpackPlugin({
            filename:'components/404.html',
            template: path.resolve(__dirname,'src/components/404.html'),
            inject:false,
        }),
    ]
}