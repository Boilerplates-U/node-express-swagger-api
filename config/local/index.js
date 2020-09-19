// config/local/index.js
// Local app config

const domain = 'localhost';
const port = 3000;

export default {
    APP_PORT: port || 3000,
    CLUSTER_MODE: process.env.CLUSTER_MODE || false,
    HOSTED_DOMAIN: process.env.hostedDomain || domain,
    SSL_ENABLED: process.env.secureRequired || false,
    DOCS_ENABLED: true,
    APP_ENV: 'local',
    FULL_APP_URL: `http://${domain}`
};