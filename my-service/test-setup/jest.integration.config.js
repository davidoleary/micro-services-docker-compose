const path = require('path');

const normalConfig = {
  rootDir: path.dirname(__dirname),
  testRegex: '(/__integration-tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  verbose: true,
  coveragePathIgnorePatterns: [],
  coverageThreshold: {
    global: {
      statements: 86,
      branches: 53,
      functions: 86,
      lines: 86,
    },
  },
  testURL: 'http://localhost/',
  modulePaths: [
    '<rootDir>/node_modules',
    '<rootDir>/',
  ],
};

module.exports = normalConfig;
