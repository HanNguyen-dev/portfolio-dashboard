const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api2',
    createProxyMiddleware({
      target: '',
      changeOrigin: true,
      pathRewrite: {
        "^/api2": "/"
      },
    }),
  );
  app.use(
    '/api1',
    createProxyMiddleware({
      target: '',
      changeOrigin: true,
      pathRewrite: {
        "^/api1": "/"
      }
    })
  );

};
