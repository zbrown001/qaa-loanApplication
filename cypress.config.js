const { GoogleSocialLogin } = require("cypress-social-logins").plugins

module.exports = {
  chromeWebSecurity: false,
  projectId: "m6w88w",
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
};
