# 🤖 Chat AI Box

An intelligent, full-stack AI conversational assistant built with a modular Node.js/Express backend and modern LLM API integration. Designed for fast, context-aware responses with customizable AI personas.

---

## 📌 Features

- **Context-Aware Chat:** Maintains multi-turn conversation context.
- **Custom AI Personas:** Switchable system modes (`general`, `coder`, `tutor`) for tailored responses.
- **Secure Backend Proxy:** API keys are protected server-side via environment variables.
- **Modular Architecture:** Clean separation of concerns (Controllers, Services, Routes, Config).
- **Fast & Lightweight:** Built using Express and optimized for quick response delivery.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Backend** | Node.js, Express.js |
| **AI Integration** | Google GenAI SDK (`gemini-2.5-flash`) |
| **Environment Management** | Dotenv, CORS |
| **Frontend (In Progress)** | React + Vite |

---

## 📂 Project Structure

```text
chat-bot-ai/
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   └── aiConfig.js       # AI client configuration
│   │   ├── controllers/
│   │   │   └── chatController.js # Request validation & error handling
│   │   ├── routes/
│   │   │   └── chatRoutes.js     # Express API route declarations
│   │   ├── services/
│   │   │   └── chatService.js    # AI model prompt formatting & calls
│   │   └── index.js              # Server entry point
│   ├── .env.example              # Template for environment variables
│   ├── package.json
│   └── .gitignore
└── README.md