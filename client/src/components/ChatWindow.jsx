import Message from "./Message";

function ChatWindow({ messages, loading }) {
  return (
    <main className="chat-window">
      <div className="chat-header">
        <h1>AI Assistant</h1>
        <p>Ask anything and get help instantly.</p>
      </div>

      <div className="messages">
        {messages.length === 0 ? (
          <div className="empty-state">
            <h2>Start a conversation</h2>
            <p>
              Choose a mode and ask your first question.
            </p>
          </div>
        ) : (
          messages.map((message, index) => (
            <Message
              key={index}
              role={message.role}
              content={message.content}
            />
          ))
        )}

        {loading && (
          <div className="message ai-message">
            <div className="message-role">AI</div>
            <div className="message-content">
              Thinking...
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default ChatWindow;