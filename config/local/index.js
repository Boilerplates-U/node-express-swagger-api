// config/local/index.js
// Local app config

const domain = 'localhost';
const port = process.env.port || 8080;

export default {
    APP_PORT: port,
    CLUSTER_MODE: process.env.CLUSTER_MODE || false,
    HOSTED_DOMAIN: process.env.HOSTED_DOMAIN || domain,
    SSL_ENABLED: process.env.SSL_ENABLED || false,
    DOCS_ENABLED: true,
    APP_ENV: 'local',
    FULL_APP_URL: `http://${domain}`
};