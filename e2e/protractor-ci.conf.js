    const config = require('./protractor.conf').config;

    config.capabilities = {
      browserName: 'firefox',
      firefoxOptions: {
        args: ['--headless']
      }
    };

    exports.config = config;
