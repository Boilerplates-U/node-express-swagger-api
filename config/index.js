import merge from 'merge';

// Default to production config if NODE_ENV is not available
const NODE_ENV = process.env.NODE_ENV || 'local';

const validConfigs = ['local', 'test', 'production'];
if(!validConfigs.includes(NODE_ENV)){
    // Comment out OR remove if you prefer to handle this gracefully.
    // Took this approach as I believe failing quickly and in a way that is immediately obvious is preferrable.
    throw new Error("Environment config not available")
}

let envConfig = require(`./${NODE_ENV}`).default;

const baseConfig = {
    DOCS_ENABLED: true,
    BUILD: process.env.BUILD_ID || 'na',
    POSTGRES_USER: 'node_app',
    POSTGRES_PASSWORD: '44Ro9BmY&z',
    POSTGRES_HOST: 'localhost'
};

const config = merge(baseConfig, envConfig);

export default config;
