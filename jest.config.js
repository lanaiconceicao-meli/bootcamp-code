module.exports = {
  projects: [
    /**
     * Server-related tests such as services or middlewares
     */
    {
      displayName: 'services',
      testMatch: ['<rootDir>/tests/unit/**/*.spec.js'],
      testEnvironment: 'node',
    },

    /**
     * Common project's components typically written with React
     */
    {
      displayName: 'components',
      testMatch: ['<rootDir>/app/**/__tests__/**/*.spec.js'],
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: [
        '<rootDir>/jest.env.js',
      ],
      verbose: true,
    },
  ],
};
