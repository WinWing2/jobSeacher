let path = require('path');

let conf = {
    entry: './src/index.jsx', // Точка входа
    output: {
        path: path.resolve(__dirname, './dist'),  // Путь, по которому будет сохранён итоговый файл.
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true // Оверлэй для отладки
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                    // extract-text-webpack-plugin не подключаю, ибо он может работать нестабитьно с webpack 4+, и в тех задании про него не говорилось.
                ]
            }
        ]
    }
};

module.exports = (env, options) => {
    let production = options.mode === 'production';
    conf.devtool = production ? 'source-map' : 'eval-sourcemap';    // Включаю подробную 'карту' для отладки, если запуск производится в режиме разработки.

    return conf;
};