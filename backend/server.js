const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const { buildContactEmail } = require('./emailTemplate');

const app = express();
const PORT = process.env.PORT || 5000;

const frontendUrl = process.env.FRONTEND_URL?.replace(/\/$/, '') || 'http://portfolio-chv3.vercel.app/';
const allowedOrigins = [frontendUrl];

// Middleware
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error(`CORS policy: origin '${origin}' not allowed`));
  },
  credentials: true,
}));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

transporter.verify((error) => {
  if (error) {
    console.error('Email transporter error:', error.message);
    console.error('   → Make sure EMAIL_USER and EMAIL_APP_PASSWORD are set in .env');
    console.error('   → EMAIL_APP_PASSWORD must be a Gmail App Password, not your login password');
  } else {
    console.log('Email transporter ready');
  }
});

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

//Contact Schema 
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true },
  phone:     { type: String, default: '' },
  message:   { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

//Routes

app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all required fields.',
      });
    }

    const newContact = new Contact({ firstName, lastName, email, phone, message });
    await newContact.save();
    console.log(`New contact saved: ${firstName} ${lastName} <${email}>`);

    const { subject, html } = buildContactEmail({ firstName, lastName, email, phone, message });

    try {
      await transporter.sendMail({
        from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject,
        html,
      });
      console.log(`Email notification sent for message from ${firstName} ${lastName}`);
    } catch (emailErr) {
      console.error('Email send failed (message still saved to DB):', emailErr.message);
    }

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
    });

  } catch (err) {
    console.error('Contact route error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again.',
    });
  }
});


app.get('/api/download/pdf', (req, res) => {
  const filePath = path.join(__dirname, 'files', 'CV.pdf');
  res.download(filePath, 'Pratham_Bansal_CV.pdf', (err) => {
    if (err && !res.headersSent) {
      res.status(404).json({ message: 'PDF file not found. Add CV.pdf to backend/files/' });
    }
  });
});

app.get('/api/download/docx', (req, res) => {
  const filePath = path.join(__dirname, 'files', 'CV.docx');
  res.download(filePath, 'Pratham_Bansal_CV.docx', (err) => {
    if (err && !res.headersSent) {
      res.status(404).json({ message: 'DOCX file not found. Add CV.docx to backend/files/' });
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Portfolio backend is running' });
});

// ─── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
