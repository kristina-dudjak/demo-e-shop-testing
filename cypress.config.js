const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 60000
  },
});
