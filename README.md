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
- [Business Value for EFOS](#-business-value-for-efos)
- [Current Limitations](#-current-limitations)
- [Future Scope](#-future-scope)
- [License](#-license)
- [Team](#-team)

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
