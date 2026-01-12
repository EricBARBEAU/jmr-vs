module.exports = {
  webpack: {
    configure: {
      // Customize Webpack config here if needed
    },
  },
  webpackDevServer: {
    client: {
      overlay: {
        errors: false,
        warnings: false,
      },
    },
    setupMiddlewares: (middlewares, devServer) => {
      // Add custom middlewares if needed
      return middlewares;
    },
  },
};