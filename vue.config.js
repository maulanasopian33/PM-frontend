const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa : {
          "name": "Project Manager",
          "short_name": "PM",
          "description": "Project Manager - antmediahost",
          "display": "standalone",
        }
})
