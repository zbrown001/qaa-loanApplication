const { defineConfig } = require("cypress")

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: "2dmetp",
  e2e: {
    setupNodeEvents(on, config) {

    },
  },
})
