module.exports = {
  proxy: {
    '/api': {
      target: 'http://106.14.226.23:80',
      changeOrigin: true,
    }
  },
}