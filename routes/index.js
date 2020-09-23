// routes/api/index.js

import express from 'express';
const router = express.Router()

import config from '../config';

router.get('/', (req, res) => {
  res.send({ message: 'welcome' });
})

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

export default router;