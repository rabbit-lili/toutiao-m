const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: false,//一般脚手架生成为true，改为false
  lintOnSave: false//关闭语法检查
})
