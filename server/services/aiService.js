import { ai } from "../config/ai.js";
import { getSystemPrompt } from "./promptService.js";

const MODEL = "gemini-3.6-flash";

function formatMessages(messages) {
  return messages.map((message) => ({
    role: message.role === "assistant" ? "model" : "user",
    parts: [
      {
        text: message.content
      }
    ]
  }));
}

export async function generateResponse(messages, mode = "general") {
  const systemPrompt = getSystemPrompt(mode);

  const response = await ai.models.generateContent({
    model: MODEL,

    config: {
      systemInstruction: systemPrompt
    },

    contents: formatMessages(messages)
  });

  return response.text;
}