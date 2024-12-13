module.exports = {
    publicPath: 'https://gevorg1990.github.io/vue-pages/', // for github https://gevorg1990.github.io/vue-pages/
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/sass/app.scss";`
            }
        },
        extract: process.env.NODE_ENV === 'production', // Extract CSS in production
    },
}