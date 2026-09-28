const { defineConfig } = require("cypress");

module.exports = defineConfig({

  video: true,
  "screenshotsFolder": "cypress/screenshots",
  "videosFolder": "cypress/videos",

  e2e: {
    baseUrl: "https://guest:welcome2qauto@qauto.forstudy.space",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
