```js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [botStatus, setBotStatus] = useState(null);

  const handleLogin = async () => {
    if (password === '') return alert('Enter password!');
    try {
      // Replace with your actual backend login API
      const res = await axios.post('/login', { password });
      if (res.data.success) {
        setIsLoggedIn(true);
      } else {
        alert('Incorrect password!');
      }
    } catch {
      alert('Login failed!');
    }
  };

  const getBotStatus = async () => {
    try {
      // Replace with your actual bot status API
      const res = await axios.get('/status');
      setBotStatus(res.data.status || 'Unknown');
    } catch {
      setBotStatus('Error');
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>LMK Admin Panel</h1>
      {!isLoggedIn ? (
        <>
          <input
            type="password"placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: 8, marginRight: 10 }}
          />
          <button onClick={handleLogin}>Login</button>
        </>
      ) : (
        <>
          <p>✅ Logged in!</p>
          <button onClick={getBotStatus}>Get Bot Status</button>
          {botStatus && <p>Bot Status: {botStatus}</p>}
        </>
      )}
    </div>
  );
}

export default App;
```
