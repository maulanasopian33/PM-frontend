const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  pwa : {
          "name": "ProManage",
          "short_name": "PM",
          "description": "ProManage - antmediahost",
          "display": "standalone",
        }
})
