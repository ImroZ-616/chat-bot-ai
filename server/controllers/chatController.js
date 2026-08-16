import { generateResponse } from "../services/aiService.js";

export async function chatController(req, res) {
  try {
    const { messages, mode } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        success: false,
        error: "Messages must be a non-empty array."
      });
    }

    const validModes = ["general", "tutor", "coder"];

    if (mode && !validModes.includes(mode)) {
      return res.status(400).json({
        success: false,
        error: "Invalid mode. Use general, tutor, or coder."
      });
    }

    for (const message of messages) {
      if (
        !message ||
        !["user", "assistant"].includes(message.role) ||
        typeof message.content !== "string"
      ) {
        return res.status(400).json({
          success: false,
          error: "Invalid message format."
        });
      }
    }

    const currentMode = mode || "general";

    const reply = await generateResponse(
      messages,
      currentMode
    );

    res.json({
      success: true,
      mode: currentMode,
      reply
    });

  } catch (error) {
    console.error("Chat error:", error);

    res.status(500).json({
      success: false,
      error: "Failed to generate AI response."
    });
  }
}