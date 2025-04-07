const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { strategy } = req.body;
  const result = {
    strategy,
    profit: Math.floor(Math.random() * 10000),
    loss: Math.floor(Math.random() * 5000),
    winRate: `${Math.floor(Math.random() * 100)}%`
  };
  res.json(result);
});

module.exports = router;
