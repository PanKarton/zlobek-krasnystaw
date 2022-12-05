// To mock env variables
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
};

module.exports = createJestConfig(customJestConfig);
