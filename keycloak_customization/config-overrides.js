/* eslint-disable */
//const {aliasWebpack, aliasJest} = require('react-app-alias')

//const alias = aliasWebpack({})
module.exports = {
//  ...alias,
  webpack(config, env) {
    if (env === 'production') {
      // JS Overrides
      config.output.filename = 'static/js/script.js';
      config.output.chunkFilename = 'static/js/script.chunk.js';

      console.log("config.plugins = ", config.plugins)
      console.log("config.resolve.plugins = ", config.resolve.plugins)
      // CSS Overrides
      config.plugins[5].options.filename = 'static/css/style.css';

      // Media and Assets Overrides
      // config.module.rules[1].oneOf[0].options.name = 'static/media/[name].[ext]';
      // config.module.rules[1].oneOf[3].options.name = 'static/media/[name].[ext]';
      const scopePluginIndex = config.resolve.plugins.findIndex(
        ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin'
      );

      config.resolve.plugins.splice(scopePluginIndex, 1);
    }
    return config;
//    return alias.webpack(config, env);
  },
};
