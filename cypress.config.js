const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    charts: true,
    reportPageTitle: "Cypress Test Report",
    embeddedScreenshots: true,
    inlineAssets: true,
  },

  video: false,
  "screenshotsFolder": "cypress/screenshots",
  "videosFolder": "cypress/videos",

  e2e: {
    baseUrl: "https://guest:welcome2qauto@qauto.forstudy.space",
    setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);
      return config;
      // implement node event listeners here
    },
  },
});
