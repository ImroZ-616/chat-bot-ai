const modes = [
  {
    id: "general",
    name: "General",
    description: "Everyday questions"
  },
  {
    id: "tutor",
    name: "Tutor",
    description: "Learn step by step"
  },
  {
    id: "coder",
    name: "Coder",
    description: "Programming help"
  }
];

function ModeSelector({ mode, onModeChange }) {
  return (
    <aside className="mode-selector">
      <h2>Chat AI Box</h2>

      <p className="mode-label">MODE</p>

      <div className="mode-list">
        {modes.map((item) => (
          <button
            key={item.id}
            className={`mode-button ${
              mode === item.id ? "active" : ""
            }`}
            onClick={() => onModeChange(item.id)}
          >
            <span>{item.name}</span>
            <small>{item.description}</small>
          </button>
        ))}
      </div>
    </aside>
  );
}

export default ModeSelector; 