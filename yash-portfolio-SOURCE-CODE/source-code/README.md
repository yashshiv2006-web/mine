# 🎬 Yash Srivastava — Developer Portfolio

![Portfolio](https://img.shields.io/badge/Portfolio-Live-e50914?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> Personal developer portfolio — Red & Black gaming theme, custom intro sound, background music, Netflix-style animation, and dark developer photo effect.

---

## 🌐 Live Demo
👉 **[yash12-portfolio.netlify.app](https://yash12-portfolio.netlify.app)**

---

## ✨ Features
- 🎤 Custom intro sound on click
- 🎵 Background music that loops (with mute toggle)
- 🎬 Netflix-style name animation on entry
- 📸 Professional photo with dark developer treatment
- 🎮 Red & Black gaming theme (Orbitron font)
- ⚡ Custom glowing red cursor
- 🔥 Scanlines, floating code tags, pulsing borders
- 📱 Fully responsive on all devices

---

## 📁 Project Structure

```
yash-portfolio/
│
├── index.html              ← Main HTML (all pages)
├── _redirects              ← Netlify routing fix
├── README.md               ← This file
│
├── css/
│   └── style.css           ← All styles
│
├── js/
│   └── main.js             ← All JavaScript
│
└── assets/
    ├── photo.png           ← Your profile photo
    ├── intro-sound.mp3     ← Intro click sound
    └── bg-music.mp3        ← Background music
```

---

## 🚀 How to Run Locally

**Option 1 — Just double-click:**
```
Double-click index.html → opens in your browser instantly ✅
```

**Option 2 — VS Code Live Server:**
```
1. Open folder in VS Code
2. Right-click index.html → Open with Live Server
```

---

## ➕ How to Add Your Projects

Open `js/main.js` and find the `myProjects` array:

```javascript
var myProjects = [
  {
    title: "My First Python Project",
    description: "What this project does.",
    tech: ["Python", "VS Code"],
    github: "https://github.com/yashshiv2006-web/project-name",
    live: ""
  },
  // Add more projects here...
];
```

---

## 🎵 How to Change the Music / Sound

Replace files in the `assets/` folder:
- `assets/intro-sound.mp3` → The sound that plays on "ENTER PORTFOLIO" click
- `assets/bg-music.mp3`    → The background music that loops

Keep the same filenames — no code changes needed!

---

## 🌐 Deploy to Netlify (FREE)

```bash
# Option 1 — Drag & Drop (easiest)
Go to app.netlify.com/drop → drag the entire folder → live in 10 seconds ✅

# Option 2 — Via GitHub
1. Push to GitHub
2. Go to netlify.com → New site → Import from Git
3. Select your repo → Deploy ✅
```

---

## 📤 Push to GitHub

```bash
git init
git add .
git commit -m "🎬 my portfolio website"
git branch -M main
git remote add origin https://github.com/yashshiv2006-web/yash-portfolio.git
git push -u origin main
```

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Animations, layout, dark theme |
| Vanilla JavaScript | Audio, cursor, navigation, scroll |
| Google Fonts | Orbitron + Rajdhani fonts |

---

## 👤 About

**Yash Srivastava** — B.Tech CSE, Batch 2025–2029, Gurgaon, India

| Contact | Link |
|---|---|
| 📧 Email | yashshiv2006@gmail.com |
| 🐙 GitHub | [yashshiv2006-web](https://github.com/yashshiv2006-web) |
| 💼 LinkedIn | [Yash Srivastava](https://www.linkedin.com/in/yash-srivastava-691a2337a) |

---

## 📄 License
MIT License — free to use and modify.
