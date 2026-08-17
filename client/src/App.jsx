import { useState } from "react";
import ModeSelector from "./components/ModeSelector";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

function App() {
  const [mode, setMode] = useState("general");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSend(message) {
    const updatedMessages = [
      ...messages,
      {
        role: "user",
        content: message
      }
    ];

    setMessages(updatedMessages);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          mode,
          messages: updatedMessages
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: data.reply
        }
      ]);
    } catch (error) {
      console.error(error);

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again."
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <ModeSelector
        mode={mode}
        onModeChange={setMode}
      />

      <section className="chat-area">
        <ChatWindow
          messages={messages}
          loading={loading}
        />

        <ChatInput
          onSend={handleSend}
          loading={loading}
        />
      </section>
    </div>
  );
}

export default App;