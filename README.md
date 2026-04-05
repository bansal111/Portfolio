#Pratham Bansal — Personal Portfolio

A full-stack personal portfolio built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).

## Features
- React.js frontend (Vite + Tailwind CSS v4)
- Node.js + Express.js REST API backend
- MongoDB + Mongoose for contact form storage
- Typewriter effect in Hero section
- Scroll animations with AOS
- Framer Motion nav animations
- Fully responsive (mobile, tablet, desktop)
- Dark / Light mode toggle
- CV download in **PDF** and **DOCX** from Express backend
- Contact form wired to backend + MongoDB
- Skills categorised: Frontend / Backend / Tools
- Animated Education & Experience timeline
- Certifications & Achievements section

---

## Project Structure
```
Portfolio/
├── frontend/          # React.js (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx          ← typewriter effect
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx        ← category filter + tooltips
│   │   │   ├── Projects.jsx
│   │   │   ├── Timeline.jsx      ← animated timeline (NEW)
│   │   │   ├── Certifications.jsx ← certs & awards (NEW)
│   │   │   ├── Contact.jsx       ← connected to backend
│   │   │   └── Footer.jsx
│   │   └── assets/
│   └── package.json
└── backend/           # Node.js + Express.js
    ├── server.js
    ├── files/
    │   ├── CV.pdf
    │   └── CV.docx      ← add your own DOCX here
    ├── .env             ← NOT pushed to GitHub
    └── package.json
```

---

Made with ❤️ by **Pratham Bansal**
