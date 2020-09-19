// config/production/index
// Production app config

const domain = 'node-express-api.prod';
const port = 443;

export default {
    APP_PORT: port,
    CLUSTER_MODE: true,
    HOSTED_DOMAIN: domain,
    DOCS_ENABLED: true,
    SSL_ENABLED: true,
    APP_ENV: 'production',
    FULL_APP_URL: `https://${domain}`
};