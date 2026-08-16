import { generateResponse } from "../services/aiService.js";

export async function chatController(req, res) {
  try {
    const { message, mode } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        success: false,
        error: "Message is required."
      });
    }

    const validModes = ["general", "tutor", "coder"];

    if (mode && !validModes.includes(mode)) {
      return res.status(400).json({
        success: false,
        error: "Invalid mode. Use general, tutor, or coder."
      });
    }

    const reply = await generateResponse(
      message,
      mode || "general"
    );

    res.json({
      success: true,
      mode: mode || "general",
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