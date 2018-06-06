const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    optimization: {
        minimize: false,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [ 'es2017', 'react' ],
                    plugins: [ 'babel-plugin-transform-object-rest-spread' ],
                    cacheDirectory: true,
                },
            },
            {
                test: /\.less$/,
                use: [ 'style-loader', 'css-loader', 'less-loader' ],
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader', 'less-loader' ],
            }
        ]
    }
};
