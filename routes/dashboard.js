```js
const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
  if (!req.session.loggedIn) return res.status(401).json({ error: 'Unauthorized' });

  res.json({
    user: req.session.user,
    bots: 5,
    sessions: 3,
    status: '🟢 Online'
  });
});

router.get('/user', (req, res) => {
  if (!req.session.loggedIn) return res.status(401).json({ error: 'Unauthorized' });
  res.json({ username: req.session.user });
});

module.exports = router;
```
