import { useState } from "react";

function ChatInput({ onSend, loading }) {
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const message = input.trim();

    if (!message || loading) {
      return;
    }

    onSend(message);
    setInput("");
  }

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Ask anything..."
        disabled={loading}
      />

      <button type="submit" disabled={loading || !input.trim()}>
        {loading ? "..." : "Send"}
      </button>
    </form>
  );
}

export default ChatInput;