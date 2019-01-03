module.exports = {
    entry: './main.js',
    output: {
        path: '/',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'latest','es2015']
            }
        }]
    }
    
}