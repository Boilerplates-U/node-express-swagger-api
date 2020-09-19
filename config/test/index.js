// config/test/index
// Test app config

const domain = 'node-express-api.test';
const port = 443;

export default {
    APP_PORT: port,
    CLUSTER_MODE: true,
    HOSTED_DOMAIN: domain,
    SSL_ENABLED: true,
    DOCS_ENABLED: true,
    APP_ENV: 'test',
    FULL_APP_URL: `https://${domain}`
};