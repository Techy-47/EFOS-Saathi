<p align="center">
  <img src="https://img.shields.io/badge/AI-Gemini%20Powered-blueviolet?style=for-the-badge&logo=google&logoColor=white" alt="Gemini AI" />
  <img src="https://img.shields.io/badge/Voice-Web%20Speech%20API-34d399?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Voice Assistant" />
  <img src="https://img.shields.io/badge/Frontend-React%20%2B%20Vite-f59e0b?style=for-the-badge&logo=react&logoColor=white" alt="React Vite" />
</p>

<h1 align="center">
  🤖 EFOS Saathi
</h1>

<p align="center">
  <strong>AI Career Guidance for Every Student, in Every Village.</strong><br/>
  A multilingual AI chatbot and voice assistant built for EFOS.in to guide rural and semi-urban students<br/>
  with career advice, skill roadmaps, parent guidance, counselor handoff, and opportunity support.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Hackathon%20Prototype-ef4444?style=flat-square" alt="Status" />
  <img src="https://img.shields.io/badge/Platform-Web%20App-6366f1?style=flat-square" alt="Platform" />
  <img src="https://img.shields.io/badge/Language-Hindi%20%7C%20English%20%7C%20Hinglish-34d399?style=flat-square" alt="Language" />
  <img src="https://img.shields.io/badge/Deployment-Vercel-black?style=flat-square&logo=vercel" alt="Vercel" />
  <img src="https://img.shields.io/badge/License-Hackathon%20Use-a855f7?style=flat-square" alt="License" />
</p>

<p align="center">
  <a href="https://your-vercel-link.vercel.app/">🚀 Live Demo</a> •
  <a href="#-features">✨ Features</a> •
  <a href="#-how-it-works">⚙️ How It Works</a> •
  <a href="#-quick-start">🚀 Quick Start</a> •
  <a href="#-deployment">🌐 Deployment</a> •
  <a href="#-future-scope">🔮 Future Scope</a>
</p>

<br/>

<p align="center">
  <img src="./screenshots/efos-saathi-preview.png" alt="EFOS Saathi Preview" width="850" />
</p>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Problem Statement](#-problem-statement)
- [Solution](#-solution)
- [Features](#-features)
- [How It Works](#-how-it-works)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Voice Support Notes](#-voice-support-notes)
- [Demo Flow](#-demo-flow)
- [Admin Dashboard](#-admin-dashboard)
- [Business Value for EFOS](#-business-value-for-efos)
- [EFOS Pillar Alignment](#-efos-pillar-alignment)
- [LocalStorage Lead Data](#-localstorage-lead-data)
- [Current Limitations](#-current-limitations)
- [Future Scope](#-future-scope)
- [Useful Git Commands](#-useful-git-commands)
- [Unique Selling Point](#-unique-selling-point)
- [Screenshots](#-screenshots)
- [Suggested Pitch](#-suggested-pitch)
- [Team](#-team)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)
- [Disclaimer](#-disclaimer)

---

## 📌 Overview

**EFOS Saathi** is an AI-powered career guidance chatbot and voice assistant created for **EFOS.in**.

EFOS stands for **Education Future One Stop** and focuses on helping Indian youth through:

- **Education**
- **Employability**
- **Employment**
- **Entrepreneurship**

EFOS Saathi extends this mission by providing a simple, accessible, multilingual, and voice-enabled AI assistant for rural and semi-urban students.

The assistant helps users discover:

- Suitable career options
- Skill development paths
- Course and internship direction
- Scholarship guidance
- Learn & Earn pathways
- Parent-friendly explanations
- EFOS counselor support

---

## ❗ Problem Statement

Many students in rural and semi-urban India face career confusion after:

- 10th
- 12th
- ITI
- Diploma
- Graduation

Common challenges include:

- Lack of access to professional career counselors
- Difficulty understanding English-heavy career platforms
- Limited awareness of verified opportunities
- Confusion between jobs, skills, courses, and higher studies
- Parent pressure and lack of career clarity at home
- No structured handoff between student need and counselor follow-up

---

## ✅ Solution

**EFOS Saathi** acts as a personal AI career companion.

Students can type or speak in Hindi, English, or Hinglish.  
The chatbot understands their question and provides simple career guidance, roadmaps, and next steps.

It also supports EFOS operations by capturing counselor leads and creating counselor-ready summaries.

---

## ✨ Features

<table>
  <tr>
    <td width="50%">

### 🤖 AI Career Chatbot

Gemini-powered chatbot that answers student career questions in simple Hindi, English, or Hinglish.

### 🎙️ Voice Input

Students can ask career questions by speaking instead of typing using the Web Speech API.

### 🔊 Manual Voice Reply

Users can click the speaker button to listen to the latest AI response.

### 🌐 Multilingual Support

Designed for Hindi, English, and Hinglish-speaking users.

  </td>
  <td width="50%">

### 👨‍👩‍👧 Parent Mode

Parent-friendly career explanations for guardians who influence rural student decisions.

### 🚩 Red Flag Detection

Detects highly confused students and recommends EFOS counselor support.

### 🧾 Counselor Handoff Summary

Creates a short summary for EFOS counselors when a student requests help.

### 📊 Admin Dashboard

Displays captured student leads, match score, career interest, and counselor summaries.

  </td>
  </tr>
</table>

<details>
<summary><strong>🔍 View All Features</strong></summary>
<br/>

| Category | Feature | Details |
|:--|:--|:--|
| AI | Gemini Chatbot | Career guidance using Gemini API |
| Language | Multilingual | Hindi, English, Hinglish |
| Voice | Speech Recognition | Browser-based voice input |
| Voice | Speech Synthesis | Manual speaker-based AI reply |
| Career | Match Score | Shows career fit percentage |
| Career | Recommended Path | Step-by-step career roadmap |
| Parent Support | Parent Mode | Explains career choices for parents |
| Alert System | Red Flag Detection | Detects confusion and recommends counselor |
| CRM | Lead Capture | Saves counselor request data |
| CRM | Dashboard | Shows student lead table |
| CRM | Counselor Summary | Creates handoff notes for EFOS team |
| UI | Responsive Design | Works on desktop, tablet, and mobile |
| Storage | LocalStorage | Demo lead storage |
| Deployment | Vercel | Hosted as a web app |

</details>

---

## ⚙️ How It Works

### Chatbot Flow

```text
Student types or speaks a question
        ↓
Voice is converted to text, if mic is used
        ↓
Message is sent to Gemini AI
        ↓
EFOS Saathi generates career guidance
        ↓
Career insights panel updates
        ↓
Student can request counselor support
        ↓
Lead is saved in dashboard
        ↓
Counselor handoff summary is created
```

### Career Guidance Flow

```text
User Query
   ↓
Mode Check
Student Mode / Parent Mode
   ↓
Red Flag Detection
   ↓
Gemini AI Response
   ↓
Career Summary Generator
   ↓
Career Insights Panel
   ↓
Counselor CTA
```

### Counselor Lead Flow

```text
Request Counselor Call
        ↓
Lead Capture Form
        ↓
Save Name, Phone, Qualification, Interest
        ↓
Attach Career Match + Score
        ↓
Generate Counselor Summary
        ↓
Show in Admin Dashboard
```

---

## 🏗️ Architecture

```text
efos-saathi/
│
├── public/
│
├── src/
│   ├── services/
│   │   ├── geminiService.js       ← Gemini AI integration
│   │   └── voiceService.js        ← Voice input/output logic
│   │
│   ├── App.jsx                    ← Main chatbot UI + dashboard logic
│   ├── App.css                    ← Responsive styling and UI design
│   ├── index.css                  ← Global styles
│   └── main.jsx                   ← React entry point
│
├── .env                           ← Gemini API key, not pushed to GitHub
├── .gitignore                     ← Ignores env and node_modules
├── package.json                   ← Dependencies and scripts
├── vite.config.js                 ← Vite config
└── README.md                      ← Project documentation
```

### Module Dependency Graph

```text
App.jsx
  ├── geminiService.js
  │      └── Gemini API / @google/genai
  │
  ├── voiceService.js
  │      ├── SpeechRecognition
  │      └── SpeechSynthesis
  │
  ├── LocalStorage
  │      └── efosSaathiLeads
  │
  └── App.css
         └── Responsive UI styling
```

---

## 🧰 Tech Stack

| Layer | Technology |
|:--|:--|
| Frontend | React.js |
| Build Tool | Vite |
| Styling | CSS + Tailwind Utility Classes |
| AI Model | Gemini API |
| SDK | `@google/genai` |
| Voice Input | Web Speech API |
| Voice Output | SpeechSynthesis |
| Storage | Browser LocalStorage |
| Hosting | Vercel |
| Version Control | Git + GitHub |

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/Techy-47/EFOS-Saathi.git
```

### 2. Move Into the Project Folder

```bash
cd EFOS-Saathi
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create `.env` File

Create a `.env` file in the project root.

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### 5. Run Locally

```bash
npm run dev
```

Open in browser:

```text
http://localhost:5173
```

---

## 🔐 Environment Variables

EFOS Saathi uses Gemini API.

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

Important:

- Never push `.env` to GitHub.
- Keep `.env` inside `.gitignore`.
- In Vercel, add the same variable in Project Settings.
- After changing the environment variable in Vercel, redeploy the project.

Recommended `.gitignore`:

```gitignore
node_modules
dist
.env
.env.local
```

---

## 🌐 Deployment

### Vercel Deployment

Recommended Vercel settings:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### Add API Key in Vercel

Go to:

```text
Vercel Project → Settings → Environment Variables
```

Add:

```text
Name: VITE_GEMINI_API_KEY
Value: your_actual_gemini_api_key
Environment: Production
```

After changing environment variables:

```text
Deployments → Latest Deployment → Redeploy
```

---

## 🎙️ Voice Support Notes

Voice features use browser APIs:

- `SpeechRecognition`
- `SpeechSynthesis`

Best supported browser:

```text
Google Chrome
```

If the chatbot is embedded inside another website using an iframe, microphone permission must be allowed:

```html
<iframe
  src="https://efos-saathi.vercel.app"
  title="EFOS Saathi Chatbot"
  allow="microphone; autoplay; clipboard-write"
  style="width: 100%; height: 100%; border: none;"
></iframe>
```

If voice input still does not work inside iframe, open the chatbot in full-page mode.

---

## 🧪 Demo Flow

### Step 1 — Open EFOS Saathi

Show the EFOS-themed chatbot UI.

### Step 2 — Ask a Career Question

```text
Mujhe 12th ke baad job chahiye aur mujhe computer pasand hai
```

### Step 3 — AI Career Guidance

EFOS Saathi suggests:

```text
Digital Marketing
Computer Operator
Web Designing
```

### Step 4 — Career Insights

Right panel shows:

```text
Career Match: Digital Marketing
Match Score: 86%
Recommended Path
```

### Step 5 — Parent Mode

Switch to Parent Mode and ask:

```text
Mere bete ne 12th pass kiya hai aur usko computer pasand hai
```

The assistant gives a parent-friendly explanation.

### Step 6 — Red Flag Detection

Ask:

```text
Mujhe kuch samajh nahi aa raha, main confused hoon kya karu
```

The app shows a red-flag alert and recommends counselor support.

### Step 7 — Lead Capture

Click:

```text
Request Counselor Call
```

Submit the counselor request form.

### Step 8 — Dashboard

Open dashboard and show:

- Student lead
- Phone number
- Qualification
- Interest
- Recommended career
- Match score
- Counselor handoff summary

---

## 📊 Admin Dashboard

The admin dashboard displays captured student leads.

### Dashboard Metrics

| Metric | Description |
|:--|:--|
| Total Leads | Total counselor requests captured |
| New Leads | Leads with New status |
| Career Matches | Leads with recommended career paths |

### Lead Table Fields

| Field | Description |
|:--|:--|
| Name | Student or parent name |
| Mobile | Contact number |
| Qualification | Education level |
| Interest | Career interest |
| Match | Recommended career |
| Score | Career match score |
| Status | Lead status |
| Counselor Summary | AI-generated counselor note |
| Created | Date and time |

---

## 💼 Business Value for EFOS

EFOS Saathi can help EFOS by:

- Reaching rural students through AI guidance
- Reducing first-level counselor workload
- Capturing qualified student leads
- Supporting Hindi/Hinglish users
- Helping parents understand career choices
- Detecting confused students who need human help
- Creating counselor-ready summaries
- Supporting EFOS’s Education, Employability, Employment, and Entrepreneurship mission

---

## 🎯 EFOS Pillar Alignment

| EFOS Pillar | EFOS Saathi Contribution |
|:--|:--|
| Education | Suggests courses, degrees, diplomas, and learning paths |
| Employability | Gives skill roadmap and skill development direction |
| Employment | Guides students toward internships and jobs |
| Entrepreneurship | Supports self-employment and business career direction |

---

## 📦 LocalStorage Lead Data

For demo purposes, leads are saved in browser LocalStorage.

### View Saved Leads

Open browser console and run:

```js
JSON.parse(localStorage.getItem("efosSaathiLeads"))
```

### Clear Saved Leads

```js
localStorage.removeItem("efosSaathiLeads")
```

---

## 🧩 Current Limitations

This is a hackathon prototype. Some features are demo-focused.

Current limitations:

- Lead data is stored in LocalStorage, not a cloud database
- Gemini API key is currently used through frontend environment variable
- Voice recognition depends on browser support
- Voice may not work reliably in embedded iframe mode
- No live EFOS opportunity database integration yet
- No real WhatsApp or SMS API integration yet
- No authentication for dashboard yet

---

## 🔮 Future Scope

- WhatsApp follow-up mock
- Real WhatsApp Business API integration
- Career report PDF generation
- EFOS opportunity matcher
- Skill gap meter
- Counselor priority score
- Village career camp dashboard
- Offline/low-network mode
- Scholarship eligibility assistant
- Resume builder
- Interview preparation assistant
- Firebase/Supabase database integration
- Google Cloud Speech-to-Text
- Google Cloud Text-to-Speech
- EFOS CRM integration
- Admin login
- Analytics dashboard
- State-wise and district-wise career demand heatmap

---

## 🚀 Future Architecture

```text
React Frontend
        ↓
Backend API / Serverless Function
        ↓
Gemini API
        ↓
Database
        ↓
EFOS Counselor Dashboard
        ↓
WhatsApp / SMS Follow-up
        ↓
Student Follow-up System
```

In production, the Gemini API key should be moved to a backend/serverless function for better security.

---

## 🛠️ Useful Git Commands

### Push Changes to GitHub

```bash
git status
git add .
git commit -m "Update EFOS Saathi"
git push
```

### Connect to a New GitHub Repository

```bash
git remote remove origin
git remote add origin https://github.com/your-username/your-repo-name.git
git branch -M main
git push -u origin main
```

---

## 🧠 Unique Selling Point

```text
EFOS Saathi is not just a chatbot.
It is an AI-powered rural career guidance system that guides students,
supports parents, captures leads, detects confusion, and prepares
counselor-ready summaries for EFOS.
```

---

## 🖼️ Screenshots

Add screenshots after uploading them to your repository.

```markdown
![Chatbot UI](./screenshots/chatbot-ui.png)
![Dashboard](./screenshots/dashboard.png)
![Mobile View](./screenshots/mobile-view.png)
```

---

## 🗣️ Suggested Pitch

> EFOS Saathi is an AI-powered career guidance chatbot and voice assistant for rural India.  
> It helps students ask career questions in Hindi, English, or Hinglish, receive personalized career suggestions, understand skill roadmaps, and connect with EFOS counselors.  
> The system also supports Parent Mode, detects confused students who need human help, captures leads, and creates counselor-ready summaries.  
> For EFOS, this can reduce first-level counseling load, improve rural reach, and convert career confusion into verified opportunity pathways.

---

## 👥 Team

```text
Project: EFOS Saathi
Built for: EFOS Hackathon
Developer/Team: Add your name or team name here
```

---

## 📜 License

This project is created for hackathon, learning, and demonstration purposes.

---

## 🙏 Acknowledgments

- EFOS.in for the mission of youth career support
- Gemini API for AI-powered guidance
- Web Speech API for browser-based voice support
- React + Vite for fast frontend development
- Vercel for deployment

---

## ⚠️ Disclaimer

EFOS Saathi is a hackathon prototype.  
The chatbot provides AI-assisted guidance but does not guarantee jobs, scholarships, admissions, or placements. Final counseling and verification should be done by EFOS experts.

---

<p align="center">
  Made with ❤️ for rural career guidance and youth empowerment<br/><br/>
  <img src="https://img.shields.io/badge/EFOS%20Saathi-Career%20Clarity%20For%20Every%20Student-bc1f2d?style=for-the-badge" alt="EFOS Saathi" />
</p>
