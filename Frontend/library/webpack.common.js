// Copyright Epic Games, Inc. All Rights Reserved.

const package = require('./package.json');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/pixelstreamingfrontend.ts'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true, // 跳过类型检查
                },
                exclude: [/node_modules/]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    externals: {
        sdp: "sdp"
    },
    plugins: [
        new webpack.DefinePlugin({
            LIBRARY_VERSION: JSON.stringify(package.version)
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        globalObject: 'this'
    }
};