import express from 'express';

import postgres from './db/engine/postgres';

import routes from './routes';
// import config from './config';

const app = express();

// 
postgres.verify();

// 
postgres.syncModels();

// 
app.use(routes);

// Log Errors
app.use((err, req, res, next) => {
    console.error(err.stack)
    next(err)
});

// Error handler
app.use((err, req, res, next) => {
    res.status(500)
    res.send({ error: 'route not available' })
});

// Catch all route error
app.use((req, res, next) => {
    res.status(404)
    res.send({ error: 'route not available' })
});

export default app;