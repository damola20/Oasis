const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 120000, // ✅ Set page load timeout correctly
    defaultCommandTimeout: 120000, // ✅ Set command timeout correctly
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
});

