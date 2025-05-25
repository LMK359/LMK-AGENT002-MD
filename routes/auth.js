```js
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/login.html'));
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = JSON.parse(fs.readFileSync('users.json'));

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    req.session.loggedIn = true;
    req.session.user = username;
    return res.redirect('/');
  }

  res.send('❌ Invalid login credentials!');
});

router.get('/', (req, res) => {
  if (!req.session.loggedIn) return res.redirect('/login');
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.post('/logout', (req, res) => {
  req.session.destroy();res.redirect('/login');
});

module.exports = router;
