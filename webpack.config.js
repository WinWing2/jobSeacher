let path = require('path');

let conf = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true //
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // exclude: '/node-modules/'
            },
            {
                test: /\.css$/,
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
}