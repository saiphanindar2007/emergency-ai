# AI Emergency Assistant 🚨

An AI-powered emergency response assistant that delivers
**clear, decisive, and panic-free guidance** during emergency situations
with minimal user input.

The system is designed for **speed, clarity, and safety** — not chat, not suggestions.

---

## 🔥 Why this matters

In emergencies, **panic costs time**.
Most people don’t know *what to do first*.

This system helps users:
- act within seconds
- avoid dangerous mistakes
- escalate to emergency services when needed

---

## ✨ Key Features

- 🚨 Panic-first UX (single emergency flow, no distractions)
- ⚡ Minimal input (emergency type + symptom)
- 🧠 Deterministic AI decision engine
- 🚦 Emergency severity classification  
  (**CRITICAL / HIGH / LOW / UNKNOWN**)
- ✅ Clear **Do / Do Not** instructions
- 📞 Emergency call CTAs (108 / 112)
- 🌬️ Calm animations for non-critical cases
- 🔒 Anonymous user sessions (no signup friction)
- 🗄️ Emergency events securely logged to Firestore
- 📊 Emergency flow tracking using Firebase Analytics
- 📱 Progressive Web App (installable on mobile)

---

## 🧠 AI Decision Engine (Explainable & Safe)

This project uses a **deterministic AI decision engine**
designed specifically for **emergency decision support**.

### 🔍 Explainable AI
Each decision includes:
- severity level
- confidence score
- human-readable reasoning (*Why this decision?*)

This ensures **transparency and trust**, especially in safety-critical scenarios.

---

## 🔁 Gemini-Ready Architecture (Hackathon-Safe)

> Live Google Gemini API calls are intentionally disabled  
> due to hackathon billing constraints.

✔ The system is architected for Gemini  
✔ AI logic is structured, replaceable, and explainable  
✔ Gemini can be enabled instantly when billing is available  

This approach is **commonly accepted in GDG hackathons**
to demonstrate AI design safely and reliably.

---

## 📈 Analytics & Observability (Google Tool)

The application uses **Firebase Analytics** to track
high-level emergency flow events such as:

- Emergency session started
- AI decision generated (by severity)
- Emergency call escalation

These insights help improve system reliability
while **preserving user privacy and anonymity**.

---

## 🧰 Tech Stack (Google-Centric)

- React + Vite
- Tailwind CSS
- React Router
- Firebase Authentication (Anonymous)
- Firebase Cloud Firestore
- Firebase Analytics
- Firebase Hosting
- Lottie Animations
- Progressive Web App (PWA)
- Gemini-ready AI architecture

---

## 📊 Project Status

✅ Phase 0 — Architecture & planning  
✅ Phase 1 — Frontend & routing  
✅ Phase 2 — Firebase Auth & Firestore  
✅ Phase 3 — AI Decision Engine  
✅ Phase 4 — Panic-free UX & Explainable AI  
✅ Phase 5 — Analytics, Observability & PWA  

🏁 **Project is complete, stable, and demo-ready**

---

## ⚠️ Ethics & Responsible AI

This application provides **AI-assisted emergency guidance only**.
It does **not replace professional medical or emergency services**.

- The system follows a **fail-safe design**
- Uncertainty triggers escalation, not assumptions
- Emergency services are always prioritized for critical cases
- No personal diagnosis is performed
- Data collection is minimal and anonymous

This design aligns with **Responsible AI principles**:
transparency, human override, and safety-first escalation.

---

## 🚀 Future Scope

- Live Gemini API integration
- Multilingual emergency guidance
- Voice-based emergency input
- Location-aware emergency services
