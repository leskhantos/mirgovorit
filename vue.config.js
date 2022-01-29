module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
   publicPath: process.env.NODE_ENV === 'production'
    ? '/courses/'
    : '/',

  transpileDependencies: [
    'quasar'
  ]


}
