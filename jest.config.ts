// For a detailed explanation regarding each configuration property and type check, visit:
// https://jestjs.io/docs/en/configuration.html
import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  clearMocks: true,
  coverageDirectory: 'coverage',
  transform: {
    '.(js|ts)': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'node',
  reporters: ['default'],
  coverageReporters: ['json', 'clover', 'lcov', 'text', 'html', 'cobertura']
};
export default config;