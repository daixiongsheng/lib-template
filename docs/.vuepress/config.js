const { resolve } = require('path')
const { name, version, repository } = require('../../package.json')
const sidebar = ['/', '/guide/', require('./logs.json')]
function CustomPlugin() {}
CustomPlugin.prototype.apply = function(compiler) {
  compiler.hooks.emit.tapAsync('CustomPlugin', (compilation, callback) => {
    // const changedFiles = compilation.compiler.watchFileSystem.watcher.mtimes
    // if (
    //   !Object.keys(changedFiles).filter(key => key.includes('guide')).length
    // ) {
    //   require('child_process').exec('npm run guide')
    // }
    callback()
  })
}
module.exports = {
  base: '/',
  title: 'title',
  description: 'description',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  configureWebpack: (config, isServer) => {
    return {
      resolve: {
        alias: {
          '@img': resolve(__dirname, 'public/img')
        }
      },
      plugins: [new CustomPlugin()]
    }
  },
  chainWebpack: (config, isServer) => {
    // config 是 ChainableConfig 的一个实例
  },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    name,
    version,
    logo: '/img/logo.png',
    sidebar,
    repo: repository,
    repoLabel: '查看源码',
    lastUpdated: 'Last Updated'
  }
}
