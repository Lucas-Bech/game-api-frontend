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
  }
};
