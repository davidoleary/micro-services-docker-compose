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
      statements: 5,
      branches: 5,
      functions: 5,
      lines: 5,
    },
  },
  modulePaths: [
    '<rootDir>/node_modules',
    '<rootDir>/',
  ],
};
