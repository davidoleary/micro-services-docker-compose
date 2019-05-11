
const path = require('path');

const normalConfig = {
  rootDir: path.dirname(__dirname),
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  verbose: true,
  modulePaths: [
    '<rootDir>/node_modules',
    '<rootDir>/',
  ],
};

module.exports = normalConfig;
