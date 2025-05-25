📄 `README.md`

```markdown
<h1 align="center">✨ LMK Admin Panel ✨</h1>

<p align="center">
  A sleek and simple web-based dashboard to manage and monitor your <strong>LMK WhatsApp Bot</strong> ⚙️
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Working-brightgreen?style=flat-square" />
  <img src="https://img.shields.io/badge/Frontend-React-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/Backend-Express%20JS-red?style=flat-square" />
</p>

---

🚀 Features

- 🔐 Secure admin login
- 📡 Bot online status monitor
- 📦 Ready to deploy on Render/Vercel
- ⚙️ Easy to extend (logs, settings, sessions)

---

🧩 Folder Structure

```
admin-panel/
├── public/
│   └── index.html
├── src/
│   ├── App.js         # Main admin logic
│   ├── index.js       # App entry
├── .gitignore
├── package.json
└── README.md
```

---

🧪 Local Development

Clone & run:

```bash
git clone https://github.com/your-username/admin-panel.git
cd admin-panel
npm install
npm start
```

Visit: `http://localhost:3000`

---

🌐 Deployment Guide

1. Run `npm run build`
2. Deploy the `/build` folder to:
   - *Render* (Static Site)
   - *Vercel*
   - *Netlify*
  
   - 3. Update API URLs in `src/App.js` to match your bot backend link

---

🔒 Admin Auth Setup

Set this on your bot server:

```env
ADMIN_PASSWORD=your_password
```

Your panel will use it to authenticate.

---

📡 API Required

- POST `/login` → for admin auth
- GET `/status` → returns bot status info

---

💖 Credits

Made with ❤️ by [LMK-AGENT002]  
Bot Repo: [GitHub](https://github.com/LMK358/LMK-AGENT002-MD-)

---

🛡 License

MIT License — Free for public and private use.
```

Let me know if you want to include screenshots or custom branding next!
