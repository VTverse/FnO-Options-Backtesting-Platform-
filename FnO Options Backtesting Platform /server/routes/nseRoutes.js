const express = require('express');
const router = express.Router();
const nseService = require('../services/nseService');

router.get('/:symbol', async (req, res) => {
  try {
    const data = await nseService.getOptionData(req.params.symbol);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
