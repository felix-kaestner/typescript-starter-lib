module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/types/'],
  globals: {
    __DEV__: true,
  },
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
  },
}
