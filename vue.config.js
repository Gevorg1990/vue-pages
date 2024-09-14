module.exports = {
    publicPath: 'https://gevorg1990.github.io/vue-pages/',
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/sass/app.scss";`
            }
        }
    },
}