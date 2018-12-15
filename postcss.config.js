module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 0,
      features: {
        'nesting-rules': true,
      },
    }),
    require('postcss-modules'),
    require('autoprefixer')({
      grid: true,
    }),
    require('postcss-easing-gradients'),
  ],
}
