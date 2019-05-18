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
      statements: 50,
      branches: 50,
      functions: 10,
      lines: 50,
    },
  },
  modulePaths: [
    '<rootDir>/node_modules',
    '<rootDir>/',
  ],
};
