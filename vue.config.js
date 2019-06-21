module.exports = {
    chainWebpack: config => {
        // GraphQL Loader
        config.module
            .rule('video')
            .test( /\.(mov|mp4)$/)
            .use('file-loader')
                .loader('file-loader')
                    .options({name: '[path][name].[ext]'})
            .end()
    }
}