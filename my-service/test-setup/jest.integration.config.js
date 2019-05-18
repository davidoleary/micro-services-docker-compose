const path = require('path');

const normalConfig = {
  rootDir: path.dirname(__dirname),
  testRegex: '(/__integration-tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  verbose: true,
  coveragePathIgnorePatterns: [],
  coverageThreshold: {
    global: {
      statements: 5,
      branches: 5,
      functions: 5,
      lines: 5,
    },
  },
  testURL: 'http://localhost/',
  modulePaths: [
    '<rootDir>/node_modules',
    '<rootDir>/',
  ],
};

module.exports = normalConfig;
