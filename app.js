```js
const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'secure-admin-secret',
  resave: false,
  saveUninitialized: true
}));

// Routes
app.use('/', require('./routes/auth'));
app.use('/api', require('./routes/dashboard'));

app.listen(PORT, () => {
  console.log(`✅ Admin panel live: http://localhost:${PORT}`);
});
```
