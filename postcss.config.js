module.exports = {
  plugins: [
    require('cssnano')({
      zindex: false,
      autoprefixer: {
        add: true,
        browsers: ['> 5%']
      }
    })
  ]
}
