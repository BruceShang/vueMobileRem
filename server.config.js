const ProxyContainer = require('./dev-proxy-container')

module.exports = {
  appPort: 8080,
  proxy: {
    '/api': {
      target: ProxyContainer.proxyTable.personal,
    }
  },
}
