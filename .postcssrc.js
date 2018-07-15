// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
      browsers: '> 0.1%',
    },
    "postcss-pxtorem": {
      rootValue: 100,
      propWhiteList: [],
      replace: true,
      // 对2px及以上的样式值进行转换
      minPixelValue: 2
    }
  }
}
