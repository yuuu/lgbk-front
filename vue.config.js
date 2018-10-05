module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@mixin': '@/components/mixin',
        '@pages': '@/components/pages',
        '@partial': '@/components/partial',
        '@router': '@/router',
        '@store': '@/store',
      }
    }
  }
};
