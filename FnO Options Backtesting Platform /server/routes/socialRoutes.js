const express = require('express');
const router = express.Router();

router.post('/share', (req, res) => {
  const { strategy, user } = req.body;
  // Log the share event (mock)
  res.json({ message: `${user} shared strategy ${strategy}` });
});

router.post('/notify', (req, res) => {
  const { user, message } = req.body;
  // Send notification (mock)
  res.json({ message: `Notification sent to ${user}: ${message}` });
});

module.exports = router;
