const CracoLessPlugin = require('craco-less');
const aliyunTheme = require('@ant-design/aliyun-theme');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: aliyunTheme,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};