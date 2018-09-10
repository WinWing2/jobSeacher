let path = require('path');

let conf = {
    entry: './src/index.jsx', // Точка входа
    output: {
        path: path.resolve(__dirname, './dist'),  // Папка, в которую будет сохранён итоговый файл
        filename: 'main.js', // Имя итогового файла
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true // Оверлэй для отладки
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // .js файлы скармливаем babel-loader'y
                use: [
                    'babel-loader'
                ],
                exclude: '/node-modules/'
            },
            {
                test: /\.css$/, // .css файлы скармливаю style/css-loader'aм
                use: [
                    'style-loader',
                    'css-loader' // extract-text-webpack-plugin не подключаю, ибо он может работать нестабитьно с webpack 4+.
                ]
                // exclude: '/node-modules/'
            }
        ]
    }
};

module.exports = (env, options) => {
    let production = options.mode === 'production';
    console.log(options);
    conf.devtool = production ? 'source-map' : 'eval-sourcemap';

    return conf;
};