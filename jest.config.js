// To mock env variables during tests
require('dotenv').config();

const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  // Show tests names
  verbose: true,
  moduleNameMapper: {
    // Line that solves the 'SyntaxError: Unexpected token 'export' caused by react-markdown
    'react-markdown': '<rootDir>/node_modules/react-markdown/react-markdown.min.js',
  },
};

module.exports = createJestConfig(customJestConfig);
