const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
            @import "~@/assets/scss/_variable.scss";
            @import "~@/assets/scss/normalize.scss";
          `,
      },
    },
  },
});
