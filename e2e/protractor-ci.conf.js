    const config = require('./protractor.conf').config;

    config.capabilities = {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--headless', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage']
        }
    };

    exports.config = config;
