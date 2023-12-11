const path = require('path');

module.exports = {
    entry: './view/src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'view/dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/, // Apply this rule to .css files
                use: ['style-loader', 'css-loader'], // Use both style-loader and css-loader for .css files
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'view/dist'),
        },
        compress: true,
        port: 8080,
    },
};
