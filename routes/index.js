// routes/api/index.js

import express from 'express';
const router = express.Router()
import config from '../config';

// define the home page route
router.get('/build', function (req, res) {
  res.send(config.BUILD);
})

// simple active route
router.get('/status', function (req, res) {
  res.send('active');
})

// all info route
router.get('/info', (req, res) => {
  res.send({
      APP_ENV: config.APP_ENV,
      FULL_APP_URL: config.FULL_APP_URL,
      BUILD: config.BUILD
  });
});

export default router;