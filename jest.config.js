module.exports = {
    modulePaths: [
        '<rootDir>/src'
    ],
    moduleNameMapper: {
        '@api$': '<rootDir>/src/api',
        '@api(.*)$': '<rootDir>/src/api/$1',
        '@components$': '<rootDir>/src/components/UI',
        '@components(.*)$': '<rootDir>/src/components/UI/$1',
        '@constants$': '<rootDir>/src/constants',
        '@constants(.*)$': '<rootDir>/src/constants/$1',
        '@core$': '<rootDir>/src/components/__core__',
        '@core(.*)$': '<rootDir>/src/components/__core__/$1',
        '@libs$': '<rootDir>/src/libs',
        '@libs(.*)$': '<rootDir>/src/libs/$1'
    },
    collectCoverageFrom: [
        '<rootDir>/src/__tests__/**/*?(spec|test).(js|ts)?(x)'
    ],
    coverageDirectory: './coverage',
    coverageReporters: [
        'text',
        'html'
    ],
    setupFiles: [
        '<rootDir>/config/jest/setup.js'
    ],
    testMatch: [
        '<rootDir>/src/__tests__/**/*?(spec|test).(js|ts)?(x)'
    ],
    testURL: 'http://localhost',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.s?css$': '<rootDir>/config/jest/cssTransform.js',
        '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
    },
    unmockedModulePathPatterns: [
        './node_modules/react'
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    snapshotSerializers: [
        'enzyme-to-json/serializer'
    ]
};
