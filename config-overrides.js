const { override, overrideDevServer, fixBabelImports,addLessLoader } = require('customize-cra');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

// 打包配置
const addCustomize = () => config => {
  if (process.env.NODE_ENV === 'production') {
    // 关闭sourceMap
    config.devtool = false;
    // 添加js打包gzip配置
    config.plugins.push(
      new CompressionWebpackPlugin({
        test: /\.js$|\.css$/,
        threshold: 1024,
      }),
    )
  }
  config.module.rules.forEach(item => {
    if (item.oneOf) {
      item.oneOf.forEach(item => {
        item.use?.forEach(item => {
          if (
            item.loader?.includes('postcss-loader') &&
            !item?.options?.postcssOptions
          ) {
            const postcssOptions = item.options;
            item.options = { postcssOptions };
          }
          if (
            item.loader?.includes('less-loader')
          ) {
            item.options = { lessOptions:item.options };
          }
        });
      });
    }
  })
  return config;
}
// 跨域配置
const devServerConfig = () => config => {
  return {
    ...config,
    // 服务开启gzip
    compress: true,
    proxy: {
      '/api': {
        target: 'xxx',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api',
        },
      }
    }
  }
}

module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
      javascriptEnabled:true,
      modifyVars: {
        "@primary-color": "#1DA57A", // example
      }
    }),
    addCustomize(),
  ),
  devServer: overrideDevServer(
    devServerConfig()
  )
}