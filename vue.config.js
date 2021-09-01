/**
 * @Project: cmis-pad-vue
 * @File:vue.config
 * @Dsc: 项目配置
 * @Author wjz
 * @CreateDate 2021/9/1 16:27
 */
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
