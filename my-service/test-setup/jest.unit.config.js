const path = require('path');

module.exports = {
  rootDir: path.dirname(__dirname),
  testRegex: "../src/.*.test.js$",
  collectCoverageFrom: ['./src/**/*.js'],
  coveragePathIgnorePatterns: [
    '../src/server.js',
  ],
  verbose: true,
  testURL: 'http://localhost/',
  coverageThreshold: {
    global: {
      statements: 92,
      branches: 69,
      functions: 92,
      lines: 93,
    },
  },
  modulePaths: [
    '<rootDir>/node_modules',
    '<rootDir>/',
  ],
};
