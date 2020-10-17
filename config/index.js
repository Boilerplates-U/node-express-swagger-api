const merge = require('merge');

// Default to production config if NODE_ENV is not available
const NODE_ENV = process.env.NODE_ENV || 'development';

const dbConfing = require('./postgres-db')[NODE_ENV];

const envConfig = require(`./${NODE_ENV}`);

const baseConfig = {
    DOCS_ENABLED: true,
    BUILD: process.env.BUILD_ID || 'na',
    db: dbConfing
};

const config = merge(baseConfig, envConfig);

module.exports = config;
