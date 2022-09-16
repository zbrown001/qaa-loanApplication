const { defineConfig } = require("cypress")

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: "m6w88w",
  env: {
    CYPRESS_RECORD_KEY: 'b44d18cc-21e5-45ae-8acb-88b350ec5a27'
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
})
