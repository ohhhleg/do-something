const path = require('path');

module.exports = {
    mode:'development',
  entry: './src/xuanxiang.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  //加载器
  module: {
    rules: [{
            // 匹配后缀为css的文件
            test: /\.css$/,
            // 用两个加载器style-loader和css-loader
            use: ['style-loader', 'css-loader']
        },
        {
            // 匹配后缀为css的文件
            test: /\.html|htm$/,
            // 用两个加载器style-loader和css-loader
            use: ['html-loader']
        }
        // {
        //     test: /\.js$/,
        //     // 除了node_modules和bower_components之外
        //     exclude: /(node_modules|bower_components)/,
        //     use: {
        //         loader: 'babel-loader',
        //         options: {
        //             presets: ['@babel/preset-env']
        //         }
        //     }
        // }
        // {
        //     // 匹配后缀为css的文件
        //     test: /\.lin$/,
        //     // 用两个加载器style-loader和css-loader
        //     use: ['eno-loader']
        // }
    ]
}
};