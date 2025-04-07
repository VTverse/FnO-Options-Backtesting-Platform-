const express = require('express');
const router = express.Router();

// Mock AWS Cognito Auth Logic
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    res.json({ token: 'mock-jwt-token', message: 'Login success' });
  } else {
    res.status(400).json({ error: 'Invalid credentials' });
  }
});

module.exports = router;
