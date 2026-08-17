# Chat AI Box 🤖

A full-stack AI chatbot application built with React, Vite, Node.js, Express, and Google Gemini.

Chat AI Box provides three specialized AI modes:

- General — General-purpose AI assistance
- Tutor — Learning-focused explanations and guidance
- Coder — Programming and technical assistance

The application supports multi-turn conversations, allowing the AI to use previous messages as context.

## Features

- Google Gemini-powered chatbot
- Multi-turn conversations
- Three AI modes:
  - General
  - Tutor
  - Coder
- React + Vite frontend
- Node.js + Express backend
- API key stored securely using environment variables
- REST API communication
- Development server with Nodemon
- Supports Linux and Windows

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- CSS

### Backend

- Node.js
- Express
- Google Gemini API
- @google/genai
- dotenv
- CORS
- Nodemon

## Project Structure

```text
chat-bot-ai/
│
├── client/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── .env.example
│   ├── index.js
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

## Requirements

Before running the project, install:

- Node.js
- npm
- Git
- Google Gemini API key

Check your installations:

```bash
node --version
npm --version
git --version
```

If these commands return version numbers, the required software is installed.

## Installation

### 1. Clone the Repository

Clone the GitHub repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Enter the project directory:

```bash
cd chat-bot-ai
```

### 2. Configure the Gemini API Key

The backend requires a Google Gemini API key.

The API key must be stored in:

```text
server/.env
```

Do not put the API key directly into the source code.

### Create `.env` from `.env.example`

The repository contains:

```text
server/.env.example
```

This file is a template and does not contain a real API key.

#### Linux / macOS

From the project root:

```bash
cp server/.env.example server/.env
```

#### Windows PowerShell

From the project root:

```powershell
Copy-Item server\.env.example server\.env
```

#### Windows Command Prompt

From the project root:

```cmd
copy server\.env.example server\.env
```

### 3. Add Your Gemini API Key

Open:

```text
server/.env
```

The file should contain:

```env
GEMINI_API_KEY=
```

Replace the empty value with your own Google Gemini API key:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE
```

Use your own API key.

Never commit your API key to GitHub.

### `.env.example` vs `.env`

`.env.example` is a template that can safely be committed to GitHub:

```env
GEMINI_API_KEY=
```

`.env` contains your private API key:

```env
GEMINI_API_KEY=your_actual_api_key
```

The `.env` file should not be committed.

Make sure your `.gitignore` contains:

```gitignore
.env
node_modules/
```

### 4. Install Backend Dependencies

Open a terminal and enter the server directory:

```bash
cd chat-bot-ai/server
```

Install the dependencies:

```bash
npm install
```

### 5. Start the Backend

From the `server` directory:

```bash
npm run dev
```

You should see:

```text
Server running on http://localhost:5000
```

Keep this terminal running.

The backend is available at:

```text
http://localhost:5000
```

### 6. Install Frontend Dependencies

Open a second terminal.

Enter the frontend directory:

```bash
cd chat-bot-ai/client
```

Install the dependencies:

```bash
npm install
```

### 7. Start the Frontend

Run:

```bash
npm run dev
```

Vite should display something similar to:

```text
VITE ... ready

➜ Local: http://localhost:5173/
```

Open:

```text
http://localhost:5173
```

in your browser.

## Running the Application

Two terminals are required.

### Terminal 1 — Backend

```bash
cd chat-bot-ai/server
npm run dev
```

Backend:

http://localhost:5000

### Terminal 2 — Frontend

```bash
cd chat-bot-ai/client
npm run dev
```

Frontend:

http://localhost:5173

Open the frontend in your browser:

http://localhost:5173

## Application Architecture

```text
                    Browser
                       │
                       ▼
                React + Vite
              localhost:5173
                       │
                       │ HTTP
                       ▼
                Express Server
              localhost:5000
                       │
                       ▼
                  AI Service
                       │
                       ▼
              Google Gemini API
                       │
                       ▼
                  AI Response
```

The Gemini API key stays on the backend and is not placed in the frontend.

## AI Modes

### General

General-purpose AI assistance.

Use General mode for:

- General questions
- Explanations
- Brainstorming
- Everyday assistance
- General conversation

### Tutor

Tutor mode is designed for learning.

It focuses on:

- Clear explanations
- Step-by-step teaching
- Examples
- Conceptual understanding
- Learning-oriented responses

Example:

```text
Explain recursion in Python.
```

### Coder

Coder mode is designed for programming and technical tasks.

It can help with:

- Programming concepts
- Code explanations
- Debugging
- Algorithms
- Data structures
- Programming examples
- Technical questions

Example:

```text
Write a Python function to reverse a linked list.
```

## Multi-Turn Conversations

The application sends the conversation history to the backend.

For example:

```text
User:
Explain recursion in Python.

AI:
Recursion is a technique where a function calls itself.

User:
Give me a simple example.

AI:
Here is a simple example...
```

Previous messages are sent along with the new message so the AI can maintain conversation context.

## API

The main chatbot endpoint is:

POST /api/chat

When running locally:

http://localhost:5000/api/chat

### Request Format

```json
{
  "mode": "tutor",
  "messages": [
    {
      "role": "user",
      "content": "Explain recursion in Python."
    }
  ]
}
```

### Supported Modes

```text
general
tutor
coder
```

### Message Format

User message:

```json
{
  "role": "user",
  "content": "Explain recursion."
}
```

Assistant message:

```json
{
  "role": "assistant",
  "content": "Recursion is..."
}
```

## Testing the Backend

You can test the backend independently of the React frontend.

Example:

```bash
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "mode": "tutor",
    "messages": [
      {
        "role": "user",
        "content": "Explain recursion in Python."
      }
    ]
  }'
```

If the backend is working correctly, it should return an AI response.

### Windows Note

The `curl` command can behave differently in Windows PowerShell because of shell quoting and command handling.

If the command does not work correctly in PowerShell, use the application frontend to test the API or use another REST API client.

## Windows Setup

This project works on Windows.

However, Windows PowerShell may prevent npm from running.

You may see an error similar to:

```text
npm.ps1 cannot be loaded because running scripts is disabled on this system.
```

This is a PowerShell execution-policy issue.

It is not a problem with this project.

### Fix the PowerShell npm Error

Open PowerShell and run:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

If PowerShell asks for confirmation, enter:

```text
Y
```

Close PowerShell.

Open a new PowerShell window.

Check npm:

```powershell
npm --version
```

Then run:

```powershell
npm install
```

After this, continue with the normal installation instructions.

### Alternative: Use Command Prompt

If you do not want to change the PowerShell execution policy, use Windows Command Prompt.

Open Command Prompt and run:

```cmd
cd C:\path\to\chat-bot-ai\server
npm install
npm run dev
```

For the frontend:

```cmd
cd C:\path\to\chat-bot-ai\client
npm install
npm run dev
```

## Linux Setup

On Linux:

```bash
cd chat-bot-ai/server
npm install
npm run dev
```

Open another terminal:

```bash
cd chat-bot-ai/client
npm install
npm run dev
```

Then open:

http://localhost:5173

## Common Problems

### `GEMINI_API_KEY is not defined`

If you see:

```text
Error: GEMINI_API_KEY is not defined
```

Check that this file exists:

```text
server/.env
```

and contains:

```env
GEMINI_API_KEY=your_actual_api_key
```

Then restart the backend:

```bash
npm run dev
```

### Gemini API Returns 404

If Gemini returns a 404 saying that the configured model is unavailable, the model configured in the backend may no longer be available to your API account.

Check the model configured in the AI service and use a currently supported Gemini model.

Gemini model availability can change over time.

### PowerShell Says Scripts Are Disabled

If you see:

```text
npm.ps1 cannot be loaded because running scripts is disabled
```

run:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Then close and reopen PowerShell.

Alternatively, use Command Prompt.

### `npm` Is Not Recognized

Check:

```bash
node --version
npm --version
```

If either command is not recognized, Node.js may not be installed or may not be available in your PATH.

Install Node.js and restart your terminal.

### Port 5000 Is Already in Use

The backend normally uses:

http://localhost:5000

If another application is already using port 5000, the backend may fail to start.

Stop the other application or change the backend port.

### Frontend Cannot Connect to Backend

Make sure both servers are running.

Backend:

http://localhost:5000

Frontend:

http://localhost:5173

Also check the browser developer console for errors.

## Security

Never commit API keys to GitHub.

The repository should contain:

```text
server/
├── .env.example
└── ...
```

It should not contain:

```text
server/.env
```

Your `.gitignore` should contain:

```gitignore
.env
node_modules/
```

Never put the Gemini API key in frontend code.

Do not put the key in:

```text
client/
README.md
App.jsx
```

Keep it in:

```text
server/.env
```

## Updating the Project

If the repository has already been cloned:

```bash
git pull
```

Update backend dependencies:

```bash
cd server
npm install
```

Update frontend dependencies:

```bash
cd ../client
npm install
```

## Development Workflow

Start the backend:

```bash
cd server
npm run dev
```

Open another terminal and start the frontend:

```bash
cd client
npm run dev
```

Open:

http://localhost:5173

## Contributing

Contributions and improvements are welcome.

Clone the repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd chat-bot-ai
```

Create a new branch:

```bash
git checkout -b feature/your-feature
```

Make your changes and test the application.

Commit your changes:

```bash
git add .
git commit -m "Add your feature"
```

Push the branch:

```bash
git push origin feature/your-feature
```

Then create a pull request.

## License

This project is licensed under the MIT License.