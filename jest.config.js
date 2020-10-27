module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.(j|t)s?(x)',
    '<rootDir>/src/**/?(*.)(spec|test).(j|t)s?(x)',
  ],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: [
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'web.js',
    'js',
    'web.jsx',
    'jsx',
    'json',
    'node',
    'mjs',
  ],
  automock: false,
  setupFilesAfterEnv: ['./setupTests.js'],
};
