// routes/api/index.js

import express from 'express';
const router = express.Router()


router.get('/', (req, res) => {
  res.send({ message: '/api/v1' });
});

export default router;