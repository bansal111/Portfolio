#Pratham Bansal — Personal Portfolio

A full-stack personal portfolio built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).

## Project Description
- A full-stack personal portfolio website built from scratch using the MERN Stack (MongoDB, Express.js, React.js, Node.js). It serves as a living CV — showcasing my skills, projects, education timeline, and certifications, with a fully functional contact form that stores messages in MongoDB and sends an email notification via Nodemailer. The CV is available for download in both PDF and DOCX formats served through a dedicated Express backend route. The UI features a typewriter effect, smooth AOS scroll animations, Framer Motion navbar, dark/light mode toggle, and is fully responsive across all devices.

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

## Deployment Link
- Frontend: https://portfolio-gray-five-506wuw9zd4.vercel.app/
- Backend: https://portfolio-chv3.vercel.app/

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

## Local setup steps:
## Prerequisites
- Node.js v18+
- npm v9+
- A MongoDB Atlas cluster
- A Gmail account with an App Password


1. Clone the repo
bashgit clone https://github.com/your-username/portfolio.git
cd portfolio

2. Setup the Backend
bashcd backend
npm install
Create your .env file:
- a env.example is attached for your reference
Place your CV files inside backend/files/:
backend/files/CV.pdf
backend/files/CV.docx
Start the backend server:
bashnpm run dev
Backend runs at → http://localhost:5000 or you can write your deployed link

3. Setup the Frontend
Open a new terminal:
bashcd frontend
npm install
npm run dev
Frontend runs at → http://localhost:5173 or you can write your deployed link

4. Verify It's Working
What to check     URL
Portfolio site    http://localhost:5173
Backend health    http://localhost:5000/api/health
PDF download      http://localhost:5000/api/download/pdf
DOCX download     http://localhost:5000/api/download/docx
Contact formFill & submit → check MongoDB Atlas + Gmail inbox

Made with ❤️ by **Pratham Bansal**
