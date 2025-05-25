```js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const ADMIN_PASSWORD = 'yourStrongPassword'; // Change this for security

// Login route
app.post('/login', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    return res.json({ success: true, message: 'Login successful' });
  }
  res.status(401).json({ success: false, message: 'Invalid password' });
});

// Status route (example)
app.get('/status', (req, res) => {
  // Here you can check bot status or system info
  res.json({ status: 'Bot is running', uptime: process.uptime() });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Admin server listening on port ${PORT}`);
});
```
