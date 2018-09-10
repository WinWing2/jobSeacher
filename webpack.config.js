let path = require('path');

let conf = {
    entry: './src/index.jsx', // Точка входа
    output: {
        path: path.resolve(__dirname, './dist'),  // Папка и путь, по которым будет сохранён итоговый файл.
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
                use: [
                    'babel-loader'
                ],
                exclude: '/node-modules/'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                    // extract-text-webpack-plugin не подключаю, ибо он может работать нестабитьно с webpack 4+, в тех задании про него не говорилось.
                ]
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