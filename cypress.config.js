const { defineConfig } = require("cypress")

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: "m6w88w",
  e2e: {
    setupNodeEvents(on, config) {

    },
  },
})
