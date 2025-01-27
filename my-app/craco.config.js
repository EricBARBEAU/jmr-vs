module.exports = {
  webpack: {
    configure: {
      // Customize Webpack config here if needed
    },
  },
  webpackDevServer: {
    // Customize Webpack Dev Server config if needed
    setupMiddlewares: (middlewares, devServer) => {
      // Add custom middlewares if needed
      return middlewares;
    },
  },
};