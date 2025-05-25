```js
const express = require('express');
const app = express();
const port = 3000;

// Simple Basic Auth middleware
const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.setHeader('WWW-Authenticate', 'Basic');
    return res.status(401).send('Auth required');
  }
  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  if (username === 'admin' && password === 'password123') {
    return next();
  }
  res.status(403).send('Forbidden');
};

app.use(auth);

app.get('/', (req, res) => {
  res.send(`
    <h1>Admin Panel</h1>
    <button onclick="fetch('/status').then(res => res.text()).then(alert)">Check Bot Status</button>
  `);
});

app.get('/status', (req, res) => {
  // Here you can add real bot status check
  res.send('Bot is running ✅');
});

app.listen(port, () => {
  console.log(`Admin panel running at http://localhost:${port}`);
});
