module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/themes/dark.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Game API";
      return args;
    });
    config.module
      .rule("file-loader")
      .test("/.(png|jpe?g|gif)$/i")
      .use("file-loader")
      .loader("file-loader")
      .end();
  }
};
