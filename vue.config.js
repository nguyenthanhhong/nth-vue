module.exports = {
    devServer: {
        proxy: {
            '/vue-element': {
                target: 'http://localhost:8090',
                // changeOrigin:true,
                /*
                pathRewrite:{
                   '^/api':''
                 }*/
            }
        }
    },

    lintOnSave: false,
    runtimeCompiler: true,
    //publicPath: process.env.NODE_ENV === 'production' ? '/gms_homepick/' : '/',
    publicPath: '/vue-element/',
    //outputDir: '../vue-element',
    configureWebpack: {
        //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
        resolve: {
            symlinks: false
        }
    }
}