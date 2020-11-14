module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/types/'],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
  },
}
