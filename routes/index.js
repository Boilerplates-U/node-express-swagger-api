// routes/api/index.js

import express from 'express';
import apiRoutes from './api';
const router = express.Router()

const apiV1Prefix = 'v1';

router.get('/api', (req, res) => {
  res.send({ apiVersions: [apiV1Prefix] });
})

router.use(`/api/${apiV1Prefix}`, apiRoutes);

// define the home page route
router.get('/build', (req, res) => {
  res.send(config.BUILD);
})

// simple active route
router.get('/status', (req, res) => {
  res.send('active');
})

// all info route
router.get('/info', (req, res) => {
  res.send({
      APP_ENV: config.APP_ENV,
      BUILD: config.BUILD
  });
});

router.get('/', (req, res) => {
  res.send({ message: 'welcome' });
})

export default router;