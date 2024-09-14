module.exports = {
    publicPath: 'vue-pages/',
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/sass/app.scss";`
            }
        }
    },
    pwa: {
        workboxOptions: {
            skipWaiting: true, // Force immediate update
            clientsClaim: true, // Serve new content without waiting for refresh
        },
    },
}